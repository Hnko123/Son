import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Button } from '../components/ui/button';
import { Plus, X, Bell, Paperclip, UserRound } from 'lucide-react';
import AttachmentBadge, { AttachmentMeta } from './AttachmentBadge';
import { useWebSocket } from './WebSocketProvider';
import ScopeToggle, { ViewScope } from './ui/scope-toggle';

interface Task {
  id: number;
  title: string;
  description: string;
  assigned_to?: number | number[] | null;
  assigned_to_many?: number[] | null;
  deadline?: string;
  priority?: string;
  status: 'todo' | 'in-progress' | 'done';
  start_date: string;
  created_at: string;
  updated_at?: string;
  created_by?: number | null;
  attachment?: AttachmentMeta | null;
}

type TaskStatus = 'todo' | 'in-progress' | 'done';
const TASK_STATUS_OPTIONS: { value: TaskStatus; label: string }[] = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'Devam Ediyor' },
  { value: 'done', label: 'Tamamlandı' }
];

const DONE_ARCHIVE_WINDOW_MS = 1000 * 60 * 60 * 24 * 2; // 2 gün
const TASK_ATTACHMENT_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'image/svg+xml',
  'application/pdf',
  'application/zip',
  'application/x-zip-compressed',
  'application/x-rar-compressed',
  'application/vnd.rar',
  'application/octet-stream'
];

const TASK_ATTACHMENT_ACCEPT = TASK_ATTACHMENT_MIME_TYPES.join(',');
const IMAGE_PREVIEW_TYPES = ['image/jpeg', 'image/png', 'image/jpg', 'image/svg+xml'];
const MS_PER_DAY = 1000 * 60 * 60 * 24;

const isImageAttachment = (attachment?: AttachmentMeta | null) => {
  if (!attachment?.url) return false;
  const mime = attachment.type?.toLowerCase();
  if (mime && IMAGE_PREVIEW_TYPES.includes(mime)) {
    return true;
  }
  const extension = (attachment.name || '').toLowerCase();
  return (
    extension.endsWith('.jpg') ||
    extension.endsWith('.jpeg') ||
    extension.endsWith('.png') ||
    extension.endsWith('.svg')
  );
};

const getTaskReferenceTimestamp = (task: Task): number | null => {
  const candidates = [task.updated_at, task.start_date, task.created_at];
  for (const candidate of candidates) {
    if (!candidate) continue;
    const ts = Date.parse(candidate);
    if (!Number.isNaN(ts)) {
      return ts;
    }
  }
  return null;
};

const isDoneTaskRecent = (task: Task, cutoff: number) => {
  if (task.status !== 'done') return true;
  const reference = getTaskReferenceTimestamp(task);
  if (reference === null) return true;
  return reference >= cutoff;
};

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

const getDeadlineUrgencyInfo = (deadline?: string) => {
  if (!deadline) return null;
  const dueDate = new Date(deadline);
  if (Number.isNaN(dueDate.getTime())) return null;
  const today = startOfDay(new Date());
  const dueStart = startOfDay(dueDate);
  const diffDays = Math.floor((dueStart.getTime() - today.getTime()) / MS_PER_DAY);

  if (diffDays < 0) {
    const overdueDays = Math.abs(diffDays);
    return {
      label: `Gecikti ${overdueDays} gün`,
      className: 'border-rose-400/60 bg-rose-500/20 text-rose-100'
    };
  }

  if (diffDays === 0) {
    return {
      label: 'Son gün bugün',
      className: 'border-amber-400/60 bg-amber-500/20 text-amber-100'
    };
  }

  if (diffDays === 1) {
    return {
      label: 'Son gün yarın',
      className: 'border-amber-300/60 bg-amber-400/20 text-amber-50'
    };
  }

  if (diffDays <= 3) {
    return {
      label: `Son ${diffDays + 1} gün`,
      className: 'border-orange-300/60 bg-orange-400/20 text-orange-50'
    };
  }

  if (diffDays <= 7) {
    return {
      label: `Son ${diffDays + 1} gün`,
      className: 'border-sky-300/50 bg-sky-500/15 text-sky-50'
    };
  }

  return {
    label: `Son tarih ${dueDate.toLocaleDateString('tr-TR')}`,
    className: 'border-white/20 bg-white/5 text-white/70'
  };
};

interface User {
  id: number;
  username: string;
  full_name: string;
  avatar?: string | null;
}

interface AssigneeDetail {
  id: number;
  name: string;
  username?: string;
  avatar?: string | null;
}
interface TaskDraft {
  title: string;
  description: string;
  assignee_text: string;
  deadline: string;
}

interface TaskDetailsDraft {
  title: string;
  assignee_text: string;
  deadline: string;
  priority: string;
  status: TaskStatus;
}

type TaskTableEdit = Partial<Task> & { assigned_to_text?: string };

interface TaskPreviewState {
  taskId: number;
  anchor?: {
    top: number;
    left: number;
  };
  intent?: 'view' | 'comment' | 'edit-task';
}

interface MentionTextareaProps {
  value: string;
  onChange: (value: string) => void;
  users: User[];
  placeholder?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  autoFocus?: boolean;
}

const MentionTextarea: React.FC<MentionTextareaProps> = ({
  value,
  onChange,
  users,
  placeholder,
  className,
  rows = 2,
  disabled = false,
  onBlur,
  onFocus,
  autoFocus = false,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [anchor, setAnchor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [highlightIndex, setHighlightIndex] = useState(0);
  const triggerStartRef = useRef<number | null>(null);

  const filteredUsers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return users;
    return users.filter(user =>
      user.username?.toLowerCase().includes(normalized) ||
      user.full_name?.toLowerCase().includes(normalized)
    );
  }, [query, users]);

  const closeSuggestions = () => {
    setIsOpen(false);
    setQuery('');
    triggerStartRef.current = null;
    setHighlightIndex(0);
  };

  const boundaryRegex = /[0-9a-zA-ZğüşöçıİĞÜŞÖÇ]/;

  const updateMentionState = (textOverride?: string) => {
    const el = textareaRef.current;
    if (!el) return;
    const caret = el.selectionStart ?? 0;
    const text = textOverride ?? el.value ?? value;
    const triggerIndex = text.lastIndexOf('@', caret - 1);
    if (triggerIndex === -1) {
      closeSuggestions();
      return;
    }
    if (triggerIndex > 0) {
      const charBefore = text[triggerIndex - 1];
      if (boundaryRegex.test(charBefore)) {
        closeSuggestions();
        return;
      }
    }
    const afterTrigger = text.slice(triggerIndex + 1, caret);
    if (afterTrigger.includes(' ') || afterTrigger.includes('\n') || afterTrigger.includes('\t')) {
      closeSuggestions();
      return;
    }
    if (afterTrigger && /[^a-zA-Z0-9_.-]/.test(afterTrigger)) {
      closeSuggestions();
      return;
    }
    triggerStartRef.current = triggerIndex;
    setQuery(afterTrigger);
    const rect = el.getBoundingClientRect();
    setAnchor({ x: rect.left, y: rect.bottom });
    setIsOpen(true);
  };

  const insertMention = (username: string) => {
    const el = textareaRef.current;
    if (!el || triggerStartRef.current === null) return;
    const start = triggerStartRef.current;
    const currentValue = el.value ?? value;
    const caret = el.selectionStart ?? currentValue.length;
    const before = currentValue.slice(0, start);
    const after = currentValue.slice(caret);
    const mentionText = `@${username} `;
    const nextValue = `${before}${mentionText}${after}`;
    onChange(nextValue);
    closeSuggestions();
    requestAnimationFrame(() => {
      const newCaret = start + mentionText.length;
      el.focus();
      el.setSelectionRange(newCaret, newCaret);
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!isOpen || filteredUsers.length === 0) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightIndex(prev => (prev + 1) % filteredUsers.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightIndex(prev => (prev - 1 + filteredUsers.length) % filteredUsers.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      insertMention(filteredUsers[highlightIndex]?.username || '');
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeSuggestions();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (textareaRef.current && !textareaRef.current.contains(event.target as Node)) {
        closeSuggestions();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => {
          const nextValue = e.target.value;
          onChange(nextValue);
          updateMentionState(nextValue);
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          onFocus?.();
        }}
        onClick={() => updateMentionState()}
        onKeyUp={() => updateMentionState()}
        onBlur={() => {
          onBlur?.();
          setTimeout(() => {
            if (!isOpen) {
              closeSuggestions();
            }
          }, 100);
        }}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        autoFocus={autoFocus}
        className={className}
      />
      {isOpen && filteredUsers.length > 0 && (
        <div
          className="absolute z-50 mt-1 w-full max-h-40 overflow-auto rounded-md border border-white/15 bg-black/80 text-sm shadow-lg"
          style={{ top: '100%', left: 0 }}
        >
          {filteredUsers.map((user, index) => (
            <button
              key={user.id}
              type="button"
              className={`w-full px-3 py-2 text-left hover:bg-white/10 ${
                index === highlightIndex ? 'bg-white/15' : ''
              }`}
              onMouseDown={(e) => {
                e.preventDefault();
                insertMention(user.username);
              }}
            >
              <span className="font-semibold">@{user.username}</span>
              {user.full_name && (
                <span className="ml-2 text-xs text-white/60">{user.full_name}</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

function Tasks() {
  const [tasks, setTasks] = useState<Record<TaskStatus, Task[]>>({
    todo: [],
    'in-progress': [],
    done: []
  });
  const [rawTasks, setRawTasks] = useState<Task[]>([]);
  const [archivedTasks, setArchivedTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [activeColumnForm, setActiveColumnForm] = useState<TaskStatus | null>(null);
  const emptyDraft: TaskDraft = { title: '', description: '', assignee_text: '', deadline: '' };
  const [taskDrafts, setTaskDrafts] = useState<Record<TaskStatus, TaskDraft>>({
    todo: { ...emptyDraft },
    'in-progress': { ...emptyDraft },
    done: { ...emptyDraft }
  });
  const [viewMode, setViewMode] = useState<'kanban' | 'table' | 'completed'>('kanban');
  const [tableEdits, setTableEdits] = useState<Record<number, TaskTableEdit>>({});
  const [commentInputs, setCommentInputs] = useState<Record<number, string>>({});
  const [commentSubmittingId, setCommentSubmittingId] = useState<number | null>(null);
  const [currentUserName, setCurrentUserName] = useState<string>('Kullanıcı');
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [dataScope, setDataScope] = useState<ViewScope>('global');
  const [seenTaskIds, setSeenTaskIds] = useState<Set<number>>(new Set());
  const [taskPreview, setTaskPreview] = useState<TaskPreviewState | null>(null);
  const { tasksEventVersion, socketReady } = useWebSocket();
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [descriptionDraft, setDescriptionDraft] = useState('');
  const [isEditingTaskDetails, setIsEditingTaskDetails] = useState(false);
  const [taskDetailsDraft, setTaskDetailsDraft] = useState<TaskDetailsDraft | null>(null);
  const [taskDetailsError, setTaskDetailsError] = useState<string | null>(null);
  const taskAttachmentInputs = useRef<Record<number, HTMLInputElement | null>>({});
  const [uploadingTaskId, setUploadingTaskId] = useState<number | null>(null);
  const inlineEditLockRef = useRef(false);
  const pendingTasksReloadRef = useRef(false);
  const seenStorageKey = useMemo(() => {
    return currentUserId ? `tasks_seen_${currentUserId}` : null;
  }, [currentUserId]);

  const getAuthHeaders = useCallback((): Record<string, string> => {
    if (typeof window === 'undefined') return {};
    const token = localStorage.getItem('access_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, []);

  const uploadTaskAttachment = useCallback(async (file: File): Promise<AttachmentMeta | null> => {
    if (!TASK_ATTACHMENT_MIME_TYPES.includes(file.type)) {
      alert('Desteklenen dosya türleri: JPG, PNG, SVG, PDF, ZIP, RAR.');
      return null;
    }
    if (file.size > 8 * 1024 * 1024) {
      alert('Dosya boyutu 8MB sınırını aşıyor.');
      return null;
    }
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('/api/uploads/image', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: formData,
      });
      if (!response.ok) {
        const errorText = await response.text();
        alert(`Yükleme başarısız: ${errorText}`);
        return null;
      }
      const payload = await response.json();
      return payload.attachment as AttachmentMeta;
    } catch (error) {
      console.error('Attachment upload failed', error);
      alert('Dosya yüklenemedi. Lütfen tekrar deneyin.');
      return null;
    }
  }, [getAuthHeaders]);

  const loadTasks = useCallback(async (showSpinner: boolean = true) => {
    try {
      setError(null);
      if (showSpinner) {
        setIsLoading(true);
      }
      const params = new URLSearchParams({
        scope: dataScope,
      });
      const response = await fetch(`/api/tasks?${params.toString()}`, {
        headers: {
          Accept: 'application/json',
          ...getAuthHeaders(),
        },
      });

      if (response.ok) {
        const tasksData = await response.json();
        const cutoff = Date.now() - DONE_ARCHIVE_WINDOW_MS;
        const archived = tasksData.filter((task: Task) => task.status === 'done' && !isDoneTaskRecent(task, cutoff));
        const activeTasks = tasksData.filter((task: Task) => task.status !== 'done' || isDoneTaskRecent(task, cutoff));
        setArchivedTasks(archived);
        setRawTasks(activeTasks);
        // Organize active tasks by status
        const organizedTasks: Record<TaskStatus, Task[]> = {
          todo: activeTasks.filter((task: Task) => task.status === 'todo'),
          'in-progress': activeTasks.filter((task: Task) => task.status === 'in-progress'),
          done: activeTasks.filter((task: Task) => task.status === 'done')
        };
        setTasks(organizedTasks);
      } else {
        setError(`Failed to load tasks: ${response.status} ${response.statusText}`);
        console.error('Error loading tasks:', response.status, response.statusText);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load tasks';
      setError(errorMessage);
      console.error('Error loading tasks:', error);
    } finally {
      if (showSpinner) {
        setIsLoading(false);
      }
    }
  }, []);

  const beginInlineEdit = useCallback(() => {
    inlineEditLockRef.current = true;
  }, []);

  const endInlineEdit = useCallback(() => {
    inlineEditLockRef.current = false;
    if (pendingTasksReloadRef.current) {
      pendingTasksReloadRef.current = false;
      loadTasks(false);
    }
  }, [loadTasks]);

  const loadUsers = useCallback(async () => {
    try {
      const response = await fetch('/api/users');
      if (response.ok) {
        const usersData = await response.json();
        const sanitizedUsers = usersData.map((user: User) => ({
          ...user,
          username: user.username?.trim() || user.username,
          full_name: user.full_name?.trim() || user.full_name,
        }));
        setUsers(sanitizedUsers);
      }
    } catch (error) {
      console.error('Error loading users:', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem('user');
      if (stored) {
        const parsed = JSON.parse(stored);
        setCurrentUserName(parsed?.full_name || parsed?.username || 'Kullanıcı');
        if (parsed?.id) {
          setCurrentUserId(parsed.id);
        }
      }
    } catch (err) {
      console.warn('Unable to parse current user info for comments', err);
    }
  }, []);

  useEffect(() => {
    if (!seenStorageKey || typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(seenStorageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSeenTaskIds(new Set(parsed.map((id: any) => Number(id)).filter((id: number) => !Number.isNaN(id))));
        }
      } else {
        setSeenTaskIds(new Set());
      }
    } catch (err) {
      console.warn('Unable to load seen tasks', err);
    }
  }, [seenStorageKey]);

  useEffect(() => {
    loadTasks(true);
    loadUsers();
  }, [loadTasks, loadUsers]);

  useEffect(() => {
    if (socketReady) {
      return undefined;
    }
    const interval = window.setInterval(() => {
      if (inlineEditLockRef.current) {
        pendingTasksReloadRef.current = true;
        return;
      }
      loadTasks(false);
    }, 15000);
    return () => window.clearInterval(interval);
  }, [loadTasks, socketReady]);

  useEffect(() => {
    if (!socketReady) return;
    if (tasksEventVersion === 0) return;
    if (inlineEditLockRef.current) {
      pendingTasksReloadRef.current = true;
      return;
    }
    loadTasks(false);
  }, [tasksEventVersion, socketReady, loadTasks]);

  const getAssigneeName = (assigneeId?: number) => {
    if (!assigneeId) return null;
    const user = users.find(u => u.id === assigneeId);
    return user ? user.full_name || user.username : 'Unknown';
  };

  const getTaskAssigneeIds = useCallback((task: Task): number[] => {
    if (Array.isArray(task.assigned_to_many)) {
      return task.assigned_to_many.filter((id): id is number => typeof id === 'number');
    }
    if (Array.isArray(task.assigned_to)) {
      return (task.assigned_to as number[]).filter((id): id is number => typeof id === 'number');
    }
    if (typeof task.assigned_to === 'number') {
      return [task.assigned_to];
    }
    return [];
  }, []);

  const getAvatarInitials = (name: string) => {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  };

  const getTaskAssigneeDetails = (task: Task): AssigneeDetail[] => {
    const ids = getTaskAssigneeIds(task);
    return ids.map((id) => {
      const user = users.find(u => u.id === id);
      const name = user?.full_name || user?.username || `User ${id}`;
      return {
        id,
        name,
        username: user?.username,
        avatar: user?.avatar || null
      };
    });
  };

  const getCreatorLabel = useCallback(
    (task: Task) => {
      if (!task.created_by) return null;
      const user = users.find(u => u.id === task.created_by);
      if (!user) return null;
      if (user.username) {
        return `@${user.username}`;
      }
      if (user.full_name) {
        return user.full_name;
      }
      return `Kullanıcı #${user.id}`;
    },
    [users]
  );

  const getUsernameById = useCallback(
    (id: number) => {
      const user = users.find(u => u.id === id);
      return user?.username || '';
    },
    [users]
  );

  const formatAssigneeText = useCallback(
    (ids: number[]) => {
      if (!ids.length) return '';
      return ids
        .map(id => {
          const username = getUsernameById(id);
          return username ? `@${username}` : '';
        })
        .filter(Boolean)
        .join(' ');
    },
    [getUsernameById]
  );

  const parseAssigneeText = useCallback(
    (text: string) => {
      const tokens = text
        .split(/[\s,]+/)
        .map(token => token.trim())
        .filter(Boolean);

      const matchedUsers: User[] = [];
      tokens.forEach(token => {
        const normalized = token.startsWith('@') ? token.slice(1) : token;
        const user = users.find(
          u => u.username && u.username.toLowerCase() === normalized.toLowerCase()
        );
        if (user && !matchedUsers.some(existing => existing.id === user.id)) {
          matchedUsers.push(user);
        }
      });

      const ids = matchedUsers.map(user => user.id);
      const sanitized = matchedUsers.map(user => `@${user.username}`).join(' ');
      return { ids, sanitized };
    },
    [users]
  );

  const computePreviewDimensions = useCallback((task: Task) => {
    const titleLength = task.title?.length ?? 0;
    const descriptionLength = task.description?.length ?? 0;
    const width = Math.min(640, Math.max(360, 260 + titleLength * 4));
    const height = Math.min(560, Math.max(260, 220 + descriptionLength * 0.1));
    return { width, height };
  }, []);

  const openTaskPreview = useCallback(
    (task: Task, originElement?: HTMLElement | null, options?: { intent?: TaskPreviewState['intent'] }) => {
      const intent = options?.intent ?? 'view';
      if (typeof window === 'undefined') {
        setTaskPreview({ taskId: task.id, anchor: { top: 80, left: 80 }, intent });
        setDescriptionDraft(task.description || '');
        const wantsTaskEdit = intent === 'edit-task';
        setIsEditingDescription(wantsTaskEdit);
        setIsEditingTaskDetails(wantsTaskEdit);
        setTaskDetailsError(null);
        return;
      }
      const dims = computePreviewDimensions(task);
      const margin = 16;
      let left = (window.innerWidth - dims.width) / 2;
      let top = Math.max(margin, window.innerHeight / 2 - dims.height / 2);

      if (originElement) {
        const rect = originElement.getBoundingClientRect();
        left = rect.left + rect.width / 2 - dims.width / 2;
        top = rect.bottom + 12;
        if (left < margin) left = margin;
        if (left + dims.width + margin > window.innerWidth) {
          left = window.innerWidth - dims.width - margin;
        }
        if (top + dims.height + margin > window.innerHeight) {
          top = Math.max(margin, rect.top - dims.height - 12);
        }
      } else {
        if (left < margin) left = margin;
        if (top + dims.height + margin > window.innerHeight) {
          top = window.innerHeight - dims.height - margin;
        }
      }

      setTaskPreview({ taskId: task.id, anchor: { top, left }, intent });
      setDescriptionDraft(task.description || '');
      const wantsTaskEdit = intent === 'edit-task';
      setIsEditingDescription(wantsTaskEdit);
      setIsEditingTaskDetails(wantsTaskEdit);
      setTaskDetailsError(null);
    },
    [computePreviewDimensions]
  );

  const closeTaskPreview = useCallback(() => {
    setTaskPreview(null);
    setIsEditingDescription(false);
    setIsEditingTaskDetails(false);
    setTaskDetailsDraft(null);
    setTaskDetailsError(null);
  }, []);

  const persistSeenTasks = useCallback((ids: Set<number>) => {
    if (!seenStorageKey || typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(seenStorageKey, JSON.stringify(Array.from(ids)));
    } catch (err) {
      console.warn('Unable to persist seen tasks', err);
    }
  }, [seenStorageKey]);

  const markTaskAsSeen = useCallback((taskId: number) => {
    setSeenTaskIds(prev => {
      if (prev.has(taskId)) return prev;
      const next = new Set(prev);
      next.add(taskId);
      persistSeenTasks(next);
      return next;
    });
  }, [persistSeenTasks]);

  useEffect(() => {
    if (!taskPreview) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeTaskPreview();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [taskPreview, closeTaskPreview]);

  useEffect(() => {
    const edits: Record<number, TaskTableEdit> = {};
    Object.values(tasks).flat().forEach(task => {
      const assigneeIds = getTaskAssigneeIds(task);
      edits[task.id] = {
        title: task.title,
        assigned_to_many: assigneeIds,
        assigned_to_text: formatAssigneeText(assigneeIds),
        priority: task.priority,
        deadline: task.deadline ? task.deadline.split('T')[0] : '',
      };
    });
    setTableEdits(edits);
  }, [tasks, formatAssigneeText, getTaskAssigneeIds]);

  const toggleColumnForm = (columnId: TaskStatus) => {
    setError(null);
    setActiveColumnForm(prev => (prev === columnId ? null : columnId));
  };

  const handleDraftChange = (columnId: TaskStatus, field: keyof TaskDraft, value: string) => {
    setTaskDrafts(prev => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        [field]: value
      }
    }));
  };

  const handleAssigneeDraftChange = (columnId: TaskStatus, text: string) => {
    setTaskDrafts(prev => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        assignee_text: text
      }
    }));
  };

  const resetDraft = (columnId: TaskStatus) => {
    setTaskDrafts(prev => ({
      ...prev,
      [columnId]: { title: '', description: '', assignee_text: '', deadline: '' }
    }));
  };

  const handleCreateTask = async (columnId: TaskStatus) => {
    const draft = taskDrafts[columnId];
    const trimmedTitle = draft.title.trim();
    if (!trimmedTitle) {
      setError('Lütfen görev için bir başlık girin');
      return;
    }
    const { ids } = parseAssigneeText(draft.assignee_text || '');
    if (ids.length === 0) {
      setError('Geçerli bir görev sahibi seçmelisiniz');
      return;
    }
    const assignedIds = ids;
    try {
      setIsSaving(true);
      setError(null);

      const taskPayload = {
        title: trimmedTitle,
        description: draft.description,
        assigned_to: assignedIds[0] ?? null,
        assigned_to_many: assignedIds,
        deadline: draft.deadline || new Date().toISOString().split('T')[0],
        status: columnId
      };

      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(taskPayload)
      });

      if (response.ok) {
        await loadTasks();
        resetDraft(columnId);
        setActiveColumnForm(null);
        console.log('Task successfully saved to backend');
      } else {
        const errorMessage = `Failed to save task: ${response.status} ${response.statusText}`;
        setError(errorMessage);
        console.error(errorMessage, response);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to save task';
      setError(errorMessage);
      console.error('Error saving task:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    try {
      setError(null);
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      if (response.ok) {
        await loadTasks();
      } else {
        const errorMessage = `Failed to delete task: ${response.status} ${response.statusText}`;
        setError(errorMessage);
        console.error(errorMessage, response);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete task';
      setError(errorMessage);
      console.error('Error deleting task:', error);
    }
  };

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const sourceColumn = source.droppableId as TaskStatus;
    const destinationColumn = destination.droppableId as TaskStatus;
    const sourceTasks = Array.from(tasks[sourceColumn]);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (!movedTask) return;

    if (sourceColumn === destinationColumn) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setTasks(prev => ({
        ...prev,
        [sourceColumn]: sourceTasks
      }));
      return;
    }

    const destinationTasks = Array.from(tasks[destinationColumn]);
    const updatedTask: Task = { ...movedTask, status: destinationColumn };
    destinationTasks.splice(destination.index, 0, updatedTask);

    setTasks(prev => ({
      ...prev,
      [sourceColumn]: sourceTasks,
      [destinationColumn]: destinationTasks
    }));

    try {
      setError(null);
      const response = await fetch(`/api/tasks/${draggableId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({ status: destinationColumn })
      });

      if (!response.ok) {
        const errorMessage = `Failed to update task: ${response.status} ${response.statusText}`;
        setError(errorMessage);
        console.error(errorMessage, response);
        await loadTasks();
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to update task status';
      setError(errorMessage);
      console.error('Error updating task status:', error);
      await loadTasks();
    }
  };

  const getTaskAssigneeNames = (task: Task): string[] => {
    return getTaskAssigneeDetails(task).map(detail => detail.name);
  };

  const isTaskAssignedToCurrentUser = useCallback((task: Task) => {
    if (!currentUserId) return false;
    return getTaskAssigneeIds(task).includes(currentUserId);
  }, [currentUserId, getTaskAssigneeIds]);

  const getTaskSnippet = (task: Task) => {
    const base = task.description?.replace(/\s+/g, ' ').trim() || '';
    if (!base) return '';
    return base.length > 140 ? `${base.slice(0, 140)}…` : base;
  };

const AssigneeChip = ({ detail, compact = false }: { detail: AssigneeDetail; compact?: boolean }) => {
    if (compact) {
      return (
        <span
          className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/25 bg-white/15 overflow-hidden text-[11px] text-white"
          title={detail.name}
        >
          {detail.avatar ? (
            <img src={detail.avatar} alt={detail.name} className="object-cover w-full h-full" />
          ) : (
            getAvatarInitials(detail.name)
          )}
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/25 bg-white/20 overflow-hidden text-xs text-white">
          {detail.avatar ? (
            <img src={detail.avatar} alt={detail.name} className="object-cover w-full h-full" />
          ) : (
            getAvatarInitials(detail.name)
          )}
        </span>
        <span className="text-xs text-white/80">{detail.name}</span>
      </span>
    );
  };

  const AssigneeBadge = ({ label }: { label: string }) => (
    <span className="inline-flex items-center gap-1 rounded-full border border-[#caa36f]/70 bg-[#381d19] px-2 py-0.5 text-[11px] font-semibold text-[#f9e2c4] shadow-[0_0_12px_rgba(241,176,112,0.35)]">
      <UserRound className="h-3 w-3 text-[#f9e2c4]" />
      <span className="truncate max-w-[110px]">{label}</span>
    </span>
  );

  const handleCommentInputChange = (taskId: number, value: string) => {
    setCommentInputs(prev => ({ ...prev, [taskId]: value }));
  };

  const handleSubmitComment = async (task: Task) => {
    const comment = (commentInputs[task.id] || '').trim();
    if (!comment) {
      setError('Yorum boş olamaz');
      return;
    }

    const timestamp = new Date().toLocaleString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    const header = `[${currentUserName} • ${timestamp}]`;
    const updatedDescription = [task.description, `${header} ${comment}`]
      .filter(Boolean)
      .join('\n\n');

    setCommentSubmittingId(task.id);
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({ description: updatedDescription })
      });

      if (!response.ok) {
        const message = `Failed to update task: ${response.status}`;
        setError(message);
        console.error(message, await response.text());
        return;
      }

      setCommentInputs(prev => ({ ...prev, [task.id]: '' }));
      await loadTasks(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Yorum eklenemedi';
      setError(message);
      console.error(message, err);
    } finally {
      setCommentSubmittingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const columnStyle = {
    'todo': {
      title: '📝 To Do',
      gradient: 'from-amber-500/15 via-orange-500/10 to-transparent',
      border: 'border-amber-500/40',
      glow: 'shadow-[0_15px_45px_-20px_rgba(251,191,36,0.8)]',
      tag: 'text-amber-300'
    },
    'in-progress': {
      title: '🚀 In Progress',
      gradient: 'from-sky-500/15 via-indigo-500/10 to-transparent',
      border: 'border-sky-500/40',
      glow: 'shadow-[0_15px_45px_-20px_rgba(56,189,248,0.8)]',
      tag: 'text-sky-300'
    },
    'done': {
      title: '✅ Completed',
      gradient: 'from-emerald-500/15 via-green-500/10 to-transparent',
      border: 'border-emerald-500/40',
      glow: 'shadow-[0_15px_45px_-20px_rgba(16,185,129,0.8)]',
      tag: 'text-emerald-300'
    }
  } as const;

  const statusOrder: Record<TaskStatus, number> = {
    todo: 0,
    'in-progress': 1,
    done: 2
  };

  const allTasks = useMemo(() => {
    return [...rawTasks].sort((a, b) => {
      const statusDiff = statusOrder[a.status] - statusOrder[b.status];
      if (statusDiff !== 0) return statusDiff;
      const dateA = a.deadline ? new Date(a.deadline).getTime() : 0;
      const dateB = b.deadline ? new Date(b.deadline).getTime() : 0;
      return dateA - dateB;
    });
  }, [rawTasks]);

  const archivedCompletedTasks = useMemo(() => {
    return [...archivedTasks].sort((a, b) => {
      const aDate = Date.parse(a.updated_at || a.created_at || '');
      const bDate = Date.parse(b.updated_at || b.created_at || '');
      return (bDate || 0) - (aDate || 0);
    });
  }, [archivedTasks]);

  const expandedTask = useMemo(() => {
    if (!taskPreview) return null;
    return allTasks.find(task => task.id === taskPreview.taskId) || null;
  }, [taskPreview, allTasks]);

  useEffect(() => {
    if (expandedTask && !isEditingDescription) {
      setDescriptionDraft(expandedTask.description || '');
    }
  }, [expandedTask, isEditingDescription]);

  const previewDimensions = expandedTask ? computePreviewDimensions(expandedTask) : { width: 420, height: 320 };
  const previewBoxWidth = Math.max(320, Math.min(480, previewDimensions.width));
  const previewBoxHeight = Math.max(260, Math.min(520, previewDimensions.height));
  const previewMaxHeight = Math.max(previewBoxHeight + 160, 360);
  const previewDescriptionHeight = Math.max(140, previewBoxHeight - 120);
  const previewAssignees = expandedTask ? getTaskAssigneeDetails(expandedTask) : [];
  const previewCreatorLabel = expandedTask ? getCreatorLabel(expandedTask) : null;
  const previewDeadlineUrgency = expandedTask ? getDeadlineUrgencyInfo(expandedTask.deadline) : null;
  const previewStatusLabel = expandedTask ? (columnStyle[expandedTask.status]?.title ?? expandedTask.status) : '';
  const shouldAutoFocusComment = taskPreview?.intent === 'comment';

  const previewPosition = useMemo(() => {
    if (!taskPreview) {
      return { top: 80, left: 80 };
    }
    const margin = 16;
    const baseTop = taskPreview.anchor?.top ?? margin;
    const baseLeft = taskPreview.anchor?.left ?? margin;

    if (typeof window === 'undefined') {
      return { top: baseTop, left: baseLeft };
    }

    const maxTop = Math.max(margin, window.innerHeight - previewBoxHeight - margin);
    const maxLeft = Math.max(margin, window.innerWidth - previewBoxWidth - margin);

    return {
      top: Math.max(margin, Math.min(baseTop, maxTop)),
      left: Math.max(margin, Math.min(baseLeft, maxLeft))
    };
  }, [taskPreview, previewBoxHeight, previewBoxWidth]);

  const handleTaskAttachmentSelect = async (task: Task, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = '';
    setUploadingTaskId(task.id);
    const attachment = await uploadTaskAttachment(file);
    setUploadingTaskId(null);
    if (attachment) {
      await persistTaskField(task.id, { attachment });
    }
  };

  const handleRemoveTaskAttachment = async (task: Task) => {
    await persistTaskField(task.id, { attachment: null });
  };

  const handleStatusShortcut = async (taskId: number, status: TaskStatus) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({ status })
      });
      if (!response.ok) {
        const errorMessage = `Failed to update task: ${response.status} ${response.statusText}`;
        setError(errorMessage);
        console.error(errorMessage, await response.text());
      } else {
        await loadTasks(false);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to update task status';
      setError(errorMessage);
      console.error('Error updating task status:', error);
    }
  };

  const persistTaskField = async (taskId: number, updates: Record<string, any>) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(updates)
      });
      if (!response.ok) {
        const errorMessage = `Failed to update task: ${response.status} ${response.statusText}`;
        setError(errorMessage);
        console.error(errorMessage, await response.text());
      } else {
        if (inlineEditLockRef.current) {
          pendingTasksReloadRef.current = true;
        } else {
          await loadTasks(false);
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to update task';
      setError(errorMessage);
      console.error('Error updating task:', error);
    }
  };

  const handleTableEditChange = (taskId: number, field: keyof Task, value: any) => {
    setTableEdits(prev => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        [field]: value
      }
    }));
  };

  const handleTableDirectChange = (task: Task, field: keyof Task, value: any) => {
    handleTableEditChange(task.id, field, value);
    handleTableEditCommit(task, field, value);
  };

  const handleAssigneeTextChange = (taskId: number, value: string) => {
    setTableEdits(prev => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        assigned_to_text: value
      }
    }));
  };

  const arraysEqual = (a: number[], b: number[]) => {
    if (a.length !== b.length) return false;
    return a.every((value, index) => value === b[index]);
  };

  const handleAssigneeTextBlur = (task: Task) => {
    const editState = tableEdits[task.id];
    const raw = editState?.assigned_to_text ?? '';
    const { ids, sanitized } = parseAssigneeText(raw);
    setTableEdits(prev => ({
      ...prev,
      [task.id]: {
        ...prev[task.id],
        assigned_to_text: sanitized,
        assigned_to_many: ids
      }
    }));
    const currentIds = getTaskAssigneeIds(task);
    if (!arraysEqual(ids, currentIds)) {
      persistTaskField(task.id, { assigned_to_many: ids });
    }
  };

  const handleTableEditCommit = (task: Task, field: keyof Task, override?: any) => {
    const pending = tableEdits[task.id];
    const value = override !== undefined ? override : pending?.[field];
    if (value === undefined) return;
    if (field === 'deadline') {
      const formatted = value ? `${value}` : '';
      if ((task.deadline ? task.deadline.split('T')[0] : '') === formatted) return;
      persistTaskField(task.id, { deadline: formatted ? new Date(`${formatted}T00:00:00`).toISOString() : null });
    } else if (field === 'title' || field === 'priority') {
      const stringValue = value ? String(value) : '';
      if ((task as any)[field] === stringValue) return;
      persistTaskField(task.id, { [field]: stringValue });
    }
  };

  const canEditExpandedTask = useMemo(() => {
    if (!expandedTask || !currentUserId) return false;
    return expandedTask.created_by === currentUserId;
  }, [expandedTask, currentUserId]);

  const handleStartDescriptionEdit = () => {
    if (!expandedTask) return;
    setDescriptionDraft(expandedTask.description || '');
    setIsEditingDescription(true);
  };

  const handleCancelDescriptionEdit = () => {
    if (!expandedTask) return;
    setDescriptionDraft(expandedTask.description || '');
    setIsEditingDescription(false);
  };

  const handleSaveDescriptionEdit = async () => {
    if (!expandedTask) return;
    await persistTaskField(expandedTask.id, { description: descriptionDraft });
    setIsEditingDescription(false);
  };

  useEffect(() => {
    if (!expandedTask || !isEditingTaskDetails) {
      if (!expandedTask) {
        setIsEditingTaskDetails(false);
      }
      setTaskDetailsDraft(null);
      return;
    }
    const assigneeIds = getTaskAssigneeIds(expandedTask);
    setTaskDetailsDraft({
      title: expandedTask.title || '',
      assignee_text: formatAssigneeText(assigneeIds),
      deadline: expandedTask.deadline ? expandedTask.deadline.split('T')[0] : '',
      priority: expandedTask.priority || '',
      status: expandedTask.status
    });
  }, [expandedTask, isEditingTaskDetails, formatAssigneeText, getTaskAssigneeIds]);

  const handleTaskDetailsDraftChange = <K extends keyof TaskDetailsDraft>(field: K, value: TaskDetailsDraft[K]) => {
    setTaskDetailsDraft(prev => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleSaveTaskDetails = async () => {
    if (!expandedTask || !taskDetailsDraft) return;
    setTaskDetailsError(null);
    const trimmedTitle = taskDetailsDraft.title.trim();
    if (!trimmedTitle) {
      setTaskDetailsError('Görev başlığı boş bırakılamaz.');
      return;
    }
    const { ids, sanitized } = parseAssigneeText(taskDetailsDraft.assignee_text || '');
    if (ids.length === 0) {
      setTaskDetailsError('Görevi en az bir kişiye atamalısınız.');
      return;
    }
    setTaskDetailsDraft(prev => (prev ? { ...prev, assignee_text: sanitized } : prev));
    const updates: Record<string, any> = {};
    if (trimmedTitle !== (expandedTask.title || '')) {
      updates.title = trimmedTitle;
    }
    if (taskDetailsDraft.status && expandedTask.status !== taskDetailsDraft.status) {
      updates.status = taskDetailsDraft.status;
    }
    const currentAssigneeIds = getTaskAssigneeIds(expandedTask);
    if (!arraysEqual(ids, currentAssigneeIds)) {
      updates.assigned_to_many = ids;
    }
    const normalizedPriority = (taskDetailsDraft.priority || '').trim();
    if ((expandedTask.priority || '') !== normalizedPriority) {
      updates.priority = normalizedPriority || null;
    }
    const currentDeadline = expandedTask.deadline ? expandedTask.deadline.split('T')[0] : '';
    if ((taskDetailsDraft.deadline || '') !== currentDeadline) {
      updates.deadline = taskDetailsDraft.deadline
        ? new Date(`${taskDetailsDraft.deadline}T00:00:00`).toISOString()
        : null;
    }
    if (Object.keys(updates).length === 0) {
      setIsEditingTaskDetails(false);
      setTaskDetailsDraft(null);
      return;
    }
    await persistTaskField(expandedTask.id, updates);
    setIsEditingTaskDetails(false);
    setTaskDetailsDraft(null);
  };

  const handleCancelTaskDetailsEdit = () => {
    setIsEditingTaskDetails(false);
    setTaskDetailsDraft(null);
    setTaskDetailsError(null);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-white/70">
        Görevler yükleniyor...
      </div>
    );
  }

  return (
    <>
    <div className="flex flex-col w-full h-full min-h-full p-5 space-y-5 text-white">
      {error && (
        <div className="flex justify-end">
          <div className="px-3 py-2 text-sm text-red-200 bg-red-500/10 border border-red-500/30 rounded-lg">
            {error}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm flex-wrap">
          <button
            type="button"
            onClick={() => setViewMode('kanban')}
            className={`px-3 py-1 rounded-full border text-xs font-semibold ${
              viewMode === 'kanban'
                ? 'border-emerald-400 bg-emerald-400/20 text-white'
                : 'border-white/20 text-white/60 hover:border-white/40'
            }`}
          >
            🗂️ Kolon Görünümü
          </button>
          <button
            type="button"
            onClick={() => setViewMode('table')}
            className={`px-3 py-1 rounded-full border text-xs font-semibold ${
              viewMode === 'table'
                ? 'border-emerald-400 bg-emerald-400/20 text-white'
                : 'border-white/20 text-white/60 hover:border-white/40'
            }`}
          >
            📋 Tablo Görünümü
          </button>
          <button
            type="button"
            onClick={() => setViewMode('completed')}
            className={`px-3 py-1 rounded-full border text-xs font-semibold ${
              viewMode === 'completed'
                ? 'border-emerald-400 bg-emerald-400/20 text-white'
                : 'border-white/20 text-white/60 hover:border-white/40'
            }`}
          >
            ✅ Tamamlananlar
          </button>
        </div>
        <div className="flex items-center gap-3">
          <ScopeToggle
            scope={dataScope}
            onScopeChange={(value) => setDataScope(value)}
            disabledPersonal={!currentUserId}
          />
          <div className="text-sm text-white/60">
            Toplam görev: {allTasks.length}
          </div>
        </div>
      </div>

      {viewMode === 'table' ? (
        <div className="flex-1 min-h-0 rounded-2xl border border-white/20 bg-black/30 overflow-auto shadow-xl shadow-black/40">
          <table className="w-full text-[12px] text-white/85 border border-white/15 border-collapse">
            <thead className="bg-white/5 sticky top-0 backdrop-blur">
              <tr className="text-center text-[11px] uppercase tracking-[0.15em] text-white/70">
                <th className="py-3 px-3 border border-white/15 text-center">Görev</th>
                <th className="py-3 px-3 border border-white/15 text-center">Atanan</th>
                <th className="py-3 px-3 border border-white/15 text-center">Öncelik</th>
                <th className="py-3 px-3 border border-white/15 text-center">Son Tarih</th>
                <th className="py-3 px-3 border border-white/15 text-center">Durum</th>
              </tr>
            </thead>
            <tbody>
              {allTasks.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-6 text-center text-white/70 border border-white/40 bg-black/20">
                    Henüz görev yok
                  </td>
                </tr>
              ) : (
                allTasks.map(task => {
                  const editState = tableEdits[task.id] || {};
                  const currentAssigneeIds = editState.assigned_to_many ?? getTaskAssigneeIds(task);
                  const assigneeTextValue = editState.assigned_to_text ?? formatAssigneeText(currentAssigneeIds);
                  const priorityValue = editState.priority ?? task.priority ?? '';
                  const deadlineValue = editState.deadline ?? (task.deadline ? task.deadline.split('T')[0] : '');
                  const shouldHighlight = isTaskAssignedToCurrentUser(task) && task.status === 'todo';
                  const snippet = getTaskSnippet(task);
                  const assigneeDetails = getTaskAssigneeDetails(task);
                  const rowTone = shouldHighlight
                    ? 'bg-red-500/15 border-red-500/40 animate-[pulse_1.4s_ease-in-out_infinite]'
                    : task.status === 'todo'
                    ? 'bg-red-500/5 border-red-500/15'
                    : task.status === 'in-progress'
                    ? 'bg-sky-500/5 border-sky-400/15'
                    : 'bg-emerald-500/5 border-emerald-400/15';
                  return (
                  <tr
                    key={`table-task-${task.id}`}
                    className={`hover:bg-white/5 transition-colors text-center border ${rowTone}`}
                  >
                    <td className="py-2.5 px-3 border border-transparent text-center text-white/90">
                      <div className="flex items-start justify-center gap-2">
                        <button
                          type="button"
                          className="w-full px-2 text-sm text-white/90 hover:text-white leading-tight max-h-12 overflow-hidden text-left"
                          onClick={(event) => {
                            markTaskAsSeen(task.id);
                            openTaskPreview(task, event.currentTarget);
                          }}
                          title="Görevi görüntüle"
                        >
                          <span className="block max-h-12 overflow-hidden">
                            {task.title || 'Görev adı'}
                          </span>
                        </button>
                        {shouldHighlight && (
                          <span
                            className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-amber-400 bg-amber-500/20 text-amber-100"
                            title="Bu görev size atandı, yanıt bekleniyor"
                          >
                            <Bell className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      {snippet ? (
                        <p className="mt-2 text-xs text-white/70 leading-snug">
                          {snippet}
                        </p>
                      ) : (
                        <p className="mt-2 text-[11px] text-white/40 italic">Açıklama eklenmemiş.</p>
                      )}
                      <div className="mt-2 flex flex-col gap-1 items-start">
                        {task.attachment && task.attachment.url ? (
                          <AttachmentBadge
                            attachment={task.attachment}
                            onRemove={() => handleRemoveTaskAttachment(task)}
                            compact
                          />
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 text-[11px] text-white/70 hover:text-white"
                            onClick={() => taskAttachmentInputs.current[task.id]?.click()}
                          >
                            <Paperclip className="w-3 h-3" /> Görsel ekle
                          </button>
                        )}
                        <input
                          type="file"
                          accept={TASK_ATTACHMENT_ACCEPT}
                          className="hidden"
                          ref={(el) => {
                            if (viewMode === 'table') {
                              if (el) {
                                taskAttachmentInputs.current[task.id] = el;
                              } else {
                                delete taskAttachmentInputs.current[task.id];
                              }
                            }
                          }}
                          onChange={(event) => handleTaskAttachmentSelect(task, event)}
                        />
                      </div>
                    </td>
                    <td className="py-2.5 px-3 border border-transparent text-center">
                      <div className="flex flex-col gap-1.5 items-center">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {assigneeDetails.length > 0 ? (
                            assigneeDetails.map(detail => (
                              <AssigneeChip key={`table-chip-${task.id}-${detail.id}`} detail={detail} compact />
                            ))
                          ) : (
                            <span className="text-[11px] text-white/50">Atama yok</span>
                          )}
                        </div>
                        <MentionTextarea
                          value={assigneeTextValue}
                          onChange={(text) => handleAssigneeTextChange(task.id, text)}
                          onBlur={() => {
                            handleAssigneeTextBlur(task);
                            endInlineEdit();
                          }}
                          onFocus={beginInlineEdit}
                          users={users}
                          rows={1}
                          placeholder="@username"
                          className="w-full min-h-[34px] text-[13px] text-white bg-transparent border border-white/20 rounded-md px-2 py-1 focus:outline-none resize-none"
                        />
                      </div>
                    </td>
                    <td className="py-2.5 px-3 border border-transparent text-center">
                      <input
                        type="text"
                        value={priorityValue || ''}
                        onChange={(e) => handleTableEditChange(task.id, 'priority', e.target.value)}
                        onFocus={beginInlineEdit}
                        onBlur={() => {
                          handleTableEditCommit(task, 'priority');
                          endInlineEdit();
                        }}
                        className="w-full h-full text-[13px] text-white bg-transparent border-0 outline-none focus:ring-0 focus:outline-none placeholder:text-white/40 text-center"
                        placeholder="Öncelik"
                      />
                    </td>
                    <td className="py-2.5 px-3 border border-transparent text-center">
                      <input
                        type="date"
                        value={deadlineValue || ''}
                        onChange={(e) => handleTableDirectChange(task, 'deadline', e.target.value)}
                        onFocus={beginInlineEdit}
                        onBlur={endInlineEdit}
                        className="w-full h-full text-[13px] text-white bg-transparent border-0 outline-none focus:ring-0 focus:outline-none text-center"
                      />
                    </td>
                    <td className="py-2.5 px-3 border border-transparent">
                      <div className="flex items-center gap-2 flex-wrap justify-center">
                        <button
                          type="button"
                          className={`px-2 py-1 rounded-full text-xs border ${
                            task.status === 'todo'
                              ? 'bg-amber-500/40 border-amber-400 text-white'
                              : 'border-white/40 text-white/70 hover:border-amber-300 hover:text-white'
                          }`}
                          onClick={() => handleStatusShortcut(task.id, 'todo')}
                        >
                          To Do
                        </button>
                        <button
                          type="button"
                          className={`px-2 py-1 rounded-full text-xs border ${
                            task.status === 'in-progress'
                              ? 'bg-sky-500/40 border-sky-400 text-white'
                              : 'border-white/40 text-white/70 hover:border-sky-300 hover:text-white'
                          }`}
                          onClick={() => handleStatusShortcut(task.id, 'in-progress')}
                        >
                          In Progress
                        </button>
                        <button
                          type="button"
                          className={`px-2 py-1 rounded-full text-xs border ${
                            task.status === 'done'
                              ? 'bg-emerald-500/40 border-emerald-400 text-white'
                              : 'border-white/40 text-white/70 hover:border-emerald-300 hover:text-white'
                          }`}
                          onClick={() => handleStatusShortcut(task.id, 'done')}
                        >
                          Done
                        </button>
                        <button
                          type="button"
                          className="text-xs text-red-300 hover:text-red-100 ml-2"
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                )})
              )}
            </tbody>
          </table>
        </div>
      ) : viewMode === 'completed' ? (
        <div className="flex-1 min-h-0 rounded-2xl border border-white/30 bg-black/40 p-4 overflow-auto shadow-inner shadow-black/60">
          <p className="text-xs text-white/60 mb-3">
            Bu alan, 48 saatten daha eski tamamlanan görevleri arşiv olarak saklar.
          </p>
          {archivedCompletedTasks.length === 0 ? (
            <div className="flex items-center justify-center py-12 text-white/60">
              Henüz tamamlanan görev yok.
            </div>
          ) : (
            <div className="space-y-3">
              {archivedCompletedTasks.map(task => (
                <div key={`completed-${task.id}`} className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <h3 className="text-base font-semibold text-white">{task.title}</h3>
                      <p className="text-xs text-white/50">
                        Tamamlandı: {task.updated_at ? new Date(task.updated_at).toLocaleString('tr-TR') : '---'}
                      </p>
                    </div>
                    {task.deadline && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-100">
                        Son Tarih: {formatDate(task.deadline)}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 text-sm text-white/80 whitespace-pre-wrap break-words max-h-32 overflow-auto">
                    {task.description || 'Açıklama eklenmemiş.'}
                  </div>
                  {getTaskAssigneeNames(task).length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/70">
                      {getTaskAssigneeNames(task).map(name => (
                        <span key={`${task.id}-${name}`} className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15">
                          {name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 min-h-0">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex flex-1 gap-2 h-full min-h-0 overflow-x-auto px-1">
            {Object.entries(tasks).map(([columnId, columnTasks]) => {
              const typedColumnId = columnId as TaskStatus;
              const columnMeta = columnStyle[typedColumnId as keyof typeof columnStyle];
              const isFormOpen = activeColumnForm === typedColumnId;
              const columnDraft = taskDrafts[typedColumnId];
              const denseMode = columnTasks.length > 7;
              const cardColorClass =
                typedColumnId === 'todo'
                  ? 'bg-red-500/20 border-red-400/30'
                  : typedColumnId === 'in-progress'
                  ? 'bg-sky-500/20 border-sky-400/30'
                  : 'bg-emerald-500/20 border-emerald-400/30';
              return (
                <div
                  key={columnId}
                  className="flex flex-col flex-1 p-1.5 rounded-2xl border border-white/10 bg-black/40 min-h-0"
                  style={{ minWidth: '235px' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-semibold text-white">
                        {columnMeta?.title}
                    </h2>
                    <button
                      type="button"
                      onClick={() => toggleColumnForm(typedColumnId)}
                      className={`flex items-center justify-center w-6 h-6 rounded-full border border-white/30 text-white hover:bg-white/10 transition ${isFormOpen ? 'bg-white/20' : ''}`}
                      title="Yeni görev ekle"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 border border-white/15">
                    {columnTasks.length} tasks
                  </span>
                </div>

                <Droppable
                  droppableId={columnId}
                  isDropDisabled={false}
                  isCombineEnabled={false}
                  ignoreContainerClipping={false}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex-1 min-h-0 overflow-y-auto space-y-1 pr-1 pb-2"
                    >
                    {isFormOpen && (
                      <div className="p-3 space-y-2 rounded-xl border border-dashed border-white/20 bg-white/5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-white">Yeni Görev</span>
                          <button
                            type="button"
                            className="p-1 text-white/70 hover:text-white"
                            onClick={() => {
                              resetDraft(typedColumnId);
                              setActiveColumnForm(null);
                            }}
                            title="İptal"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <input
                          type="text"
                          placeholder="Görev başlığı"
                          value={columnDraft.title}
                          onChange={(e) => handleDraftChange(typedColumnId, 'title', e.target.value)}
                          className="w-full px-3 py-2 text-sm text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 placeholder:text-white/40"
                        />
                        <textarea
                          placeholder="Açıklama"
                          value={columnDraft.description}
                          onChange={(e) => handleDraftChange(typedColumnId, 'description', e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 text-sm text-white bg-white/10 border border-white/20 rounded-lg resize-none focus:outline-none focus:border-emerald-400 placeholder:text-white/40"
                        />
                        <MentionTextarea
                          value={columnDraft.assignee_text}
                          onChange={(text) => handleAssigneeDraftChange(typedColumnId, text)}
                          users={users}
                          rows={2}
                          placeholder="@username yazarak sorumlu ekleyin"
                          className="w-full px-3 py-2 text-sm text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 placeholder:text-white/40 resize-none"
                        />
                        <p className="text-[11px] text-white/60">
                          @ ile kullanıcı adını yazıp listeden seçerek birden fazla kişi ekleyebilirsiniz.
                        </p>
                        <div className="flex gap-2">
                          <input
                            type="date"
                            value={columnDraft.deadline}
                            onChange={(e) => handleDraftChange(typedColumnId, 'deadline', e.target.value)}
                            className="flex-1 px-3 py-2 text-sm text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400"
                          />
                          <Button
                            type="button"
                            className="bg-emerald-500 text-black hover:bg-emerald-400"
                            disabled={isSaving}
                            onClick={() => handleCreateTask(typedColumnId)}
                          >
                            Kaydet
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10"
                            onClick={() => {
                              resetDraft(typedColumnId);
                              setActiveColumnForm(null);
                            }}
                          >
                            Vazgeç
                          </Button>
                        </div>
                      </div>
                    )}
                    {columnTasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                        {(provided, snapshot) => {
                          const dragStyle = {
                            ...provided.draggableProps.style,
                            boxShadow: snapshot.isDragging ? '0 25px 40px rgba(0,0,0,0.5)' : 'none'
                          };
                          const shouldHighlightCard = isTaskAssignedToCurrentUser(task) && task.status === 'todo';
                          const assigneeDetails = getTaskAssigneeDetails(task);
                          const deadlineUrgency = getDeadlineUrgencyInfo(task.deadline);
                          const cardSpacing = denseMode ? 'p-2 space-y-1.5' : 'p-2.5 space-y-1.5';
                          const highlightTone = shouldHighlightCard
                            ? 'bg-red-500/15 border-red-400 shadow-[0_0_25px_rgba(248,113,113,0.45)] animate-[pulse_1.6s_ease-in-out_infinite]'
                            : '';
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={dragStyle}
                            >
                              <div
                                className={`group relative rounded-xl border ${cardSpacing} text-[13px] ${denseMode ? 'text-[12px]' : ''} cursor-pointer transition hover:border-white/30 ${highlightTone || cardColorClass}`}
                                onClick={(event) => {
                                  if (snapshot.isDragging) return;
                                  markTaskAsSeen(task.id);
                                  openTaskPreview(task, event.currentTarget as HTMLElement);
                                }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                  if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    markTaskAsSeen(task.id);
                                    openTaskPreview(task, event.currentTarget as HTMLElement);
                                  }
                                }}
                              >
                                <div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                                  <button
                                    type="button"
                                    data-card-action="true"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-white bg-white/15 rounded-full hover:bg-white/30 disabled:opacity-50"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      taskAttachmentInputs.current[task.id]?.click();
                                    }}
                                    title="Ek ekle"
                                    disabled={uploadingTaskId === task.id}
                                  >
                                    <Paperclip className="w-3 h-3" />
                                  </button>
                                  <button
                                    type="button"
                                    data-card-action="true"
                                    className="flex items-center justify-center w-6 h-6 text-xs text-white bg-red-600/80 rounded-full hover:bg-red-600"
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      handleDeleteTask(task.id);
                                    }}
                                    title="Görevi sil"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </div>
                                <input
                                  type="file"
                                  accept={TASK_ATTACHMENT_ACCEPT}
                                  className="hidden"
                                  ref={(el) => {
                                    if (el) {
                                      taskAttachmentInputs.current[task.id] = el;
                                    } else {
                                      delete taskAttachmentInputs.current[task.id];
                                    }
                                  }}
                                  onChange={(event) => handleTaskAttachmentSelect(task, event)}
                                />
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0 pr-2">
                                    <h3 className="text-sm font-semibold text-white leading-snug max-h-[3.4em] overflow-hidden">
                                      {task.title || 'Görev'}
                                    </h3>
                                  </div>
                                  <div className="flex flex-col items-end gap-1 min-w-[150px]">
                                    <div className="flex flex-wrap justify-end gap-1 max-w-[180px]">
                                      {assigneeDetails.length > 0 ? (
                                        assigneeDetails.map((detail) => (
                                          <AssigneeBadge
                                            key={`${task.id}-assignee-${detail.id}`}
                                            label={detail.name || detail.username || `Kullanıcı #${detail.id}`}
                                          />
                                        ))
                                      ) : (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-white/20 bg-white/5 text-[11px] text-white/60">
                                          Atama yok
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      {task.attachment?.url && (
                                        <span
                                          className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/30 text-white/80 bg-white/10"
                                          title="Ek mevcut"
                                        >
                                          <Paperclip className="w-3 h-3" />
                                        </span>
                                      )}
                                      {shouldHighlightCard && (
                                        <span
                                          className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-amber-400 bg-amber-500/20 text-amber-100"
                                          title="Size atanan bekleyen görev"
                                        >
                                          <Bell className="w-3 h-3" />
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2 text-[11px] text-white/60 space-y-0.5">
                                  {task.deadline && (
                                    <div className="text-rose-200 font-semibold">⏰ {formatDate(task.deadline)}</div>
                                  )}
                                  <div>Oluşturan: {getCreatorLabel(task) || '-'}</div>
                                </div>
                                <div className="flex items-center justify-between text-[11px] text-white/60 pt-1">
                                  {deadlineUrgency ? (
                                    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 ${deadlineUrgency.className}`}>
                                      ⏰ {deadlineUrgency.label}
                                    </span>
                                  ) : task.priority ? (
                                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2 py-0.5 text-white/70">
                                      🎯 {task.priority}
                                    </span>
                                  ) : (
                                    <span className="text-white/35">Son tarih belirtilmedi</span>
                                  )}
                                  <div className="flex items-center gap-1.5">
                                    <button
                                      type="button"
                                      data-card-action="true"
                                      className="inline-flex items-center gap-1 rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/70 hover:border-white/40 hover:text-white transition"
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        markTaskAsSeen(task.id);
                                        openTaskPreview(task, event.currentTarget as HTMLElement, { intent: 'comment' });
                                      }}
                                      title="Detayda yorum aç"
                                    >
                                      <Plus className="w-3 h-3" /> Yorum
                                    </button>
                                    {task.created_by && task.created_by === currentUserId && (
                                      <button
                                        type="button"
                                        data-card-action="true"
                                        className="inline-flex items-center gap-1 rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/70 hover:border-white/40 hover:text-white transition"
                                        onClick={(event) => {
                                          event.stopPropagation();
                                          markTaskAsSeen(task.id);
                                          openTaskPreview(task, event.currentTarget as HTMLElement, { intent: 'edit-task' });
                                        }}
                                        title="Görevi düzenle"
                                      >
                                        ✏️ Düzenle
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }}
                      </Draggable>
                    ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
            })}
          </div>
        </DragDropContext>
      </div>
      )}
    </div>
      {taskPreview && expandedTask && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div
            className="absolute inset-0 pointer-events-auto"
            onClick={closeTaskPreview}
          />
          <div
            className="absolute pointer-events-auto rounded-2xl border border-white/15 bg-slate-950/95 p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] space-y-4 overflow-y-auto"
            style={{
              top: previewPosition.top,
              left: previewPosition.left,
              width: `min(90vw, ${previewBoxWidth}px)`,
              maxHeight: `min(80vh, ${previewMaxHeight}px)`
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1 text-center">
                <h3 className="text-lg font-semibold text-white">{expandedTask.title}</h3>
                {expandedTask.deadline && (
                  <p className="text-sm text-rose-300">
                    Son tarih: {formatDate(expandedTask.deadline)}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 justify-center text-[11px] text-white/70">
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                    Oluşturan: {previewCreatorLabel || '-'}
                  </span>
                  {previewStatusLabel && (
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                      Durum: {previewStatusLabel}
                    </span>
                  )}
                  {previewDeadlineUrgency ? (
                    <span className={`px-2 py-0.5 rounded-full border ${previewDeadlineUrgency.className}`}>
                      ⏰ {previewDeadlineUrgency.label}
                    </span>
                  ) : (
                    expandedTask.deadline && (
                      <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                        Son tarih: {formatDate(expandedTask.deadline)}
                      </span>
                    )
                  )}
                  {expandedTask.priority && !previewDeadlineUrgency && (
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                      Öncelik: {expandedTask.priority}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {previewAssignees.length > 0 ? (
                    previewAssignees.map(detail => (
                      <AssigneeChip key={`preview-chip-${detail.id}`} detail={detail} />
                    ))
                  ) : (
                    <span className="text-xs text-white/60">Atama yok</span>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="text-white/60 hover:text-white"
                onClick={closeTaskPreview}
                title="Pencereyi kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              <div
                className="overflow-auto rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white"
                style={{ maxHeight: previewDescriptionHeight }}
              >
                {isEditingDescription ? (
                  <textarea
                    value={descriptionDraft}
                    onChange={(e) => setDescriptionDraft(e.target.value)}
                    className="w-full h-40 bg-black/30 text-white border border-white/20 rounded-lg p-2 text-sm resize-none focus:outline-none focus:border-emerald-400"
                  />
                ) : (
                  <div className="whitespace-pre-wrap">
                    {expandedTask.description || 'Açıklama eklenmemiş.'}
                  </div>
                )}
              </div>
              {canEditExpandedTask && (
                <div className="flex items-center justify-end gap-2">
                  {isEditingDescription ? (
                    <>
                      <Button
                        type="button"
                        className="px-3 py-1 text-xs font-semibold text-black bg-emerald-400/90 rounded-full hover:bg-emerald-300/90"
                        onClick={handleSaveDescriptionEdit}
                      >
                        Kaydet
                      </Button>
                      <Button
                        type="button"
                        className="px-3 py-1 text-xs text-white border border-white/30 rounded-full hover:bg-white/10"
                        onClick={handleCancelDescriptionEdit}
                      >
                        İptal
                      </Button>
                    </>
                  ) : (
                    <Button
                      type="button"
                      className="px-3 py-1 text-xs text-white border border-white/30 rounded-full hover:bg-white/10"
                      onClick={handleStartDescriptionEdit}
                    >
                      Metni Düzenle
                    </Button>
                  )}
                </div>
              )}
            </div>
            {canEditExpandedTask && (
              <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white">Görev Alanları</p>
                  {isEditingTaskDetails ? (
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        className="px-3 py-1 text-xs font-semibold text-black bg-emerald-400/90 rounded-full hover:bg-emerald-300/90"
                        onClick={handleSaveTaskDetails}
                      >
                        Kaydet
                      </Button>
                      <Button
                        type="button"
                        className="px-3 py-1 text-xs text-white border border-white/30 rounded-full hover:bg-white/10"
                        onClick={handleCancelTaskDetailsEdit}
                      >
                        İptal
                      </Button>
                    </div>
                  ) : (
                    <Button
                      type="button"
                      className="px-3 py-1 text-xs text-white border border-white/30 rounded-full hover:bg-white/10"
                      onClick={() => {
                        setTaskDetailsError(null);
                        setIsEditingTaskDetails(true);
                      }}
                    >
                      Alanları Düzenle
                    </Button>
                  )}
                </div>
                {isEditingTaskDetails && taskDetailsDraft ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={taskDetailsDraft.title}
                      onChange={(e) => handleTaskDetailsDraftChange('title', e.target.value)}
                      className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                      placeholder="Görev başlığı"
                    />
                    <MentionTextarea
                      value={taskDetailsDraft.assignee_text}
                      onChange={(text) => handleTaskDetailsDraftChange('assignee_text', text)}
                      users={users}
                      rows={2}
                      placeholder="@kullanici"
                      className="w-full px-3 py-2 text-sm text-white bg-black/30 border border-white/20 rounded-lg resize-none focus:outline-none focus:border-emerald-400"
                    />
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <select
                        value={taskDetailsDraft.status}
                        onChange={(e) => handleTaskDetailsDraftChange('status', e.target.value as TaskStatus)}
                        className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                      >
                        {TASK_STATUS_OPTIONS.map(option => (
                          <option key={option.value} value={option.value} className="text-black">
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="date"
                        value={taskDetailsDraft.deadline}
                        onChange={(e) => handleTaskDetailsDraftChange('deadline', e.target.value)}
                        className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={taskDetailsDraft.priority}
                        onChange={(e) => handleTaskDetailsDraftChange('priority', e.target.value)}
                        placeholder="Öncelik"
                        className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none sm:col-span-2"
                      />
                    </div>
                    {taskDetailsError && (
                      <p className="text-xs text-rose-300">{taskDetailsError}</p>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-white/60">
                    Bu görev yalnızca oluşturan kişi tarafından güncellenebilir.
                  </p>
                )}
              </div>
            )}
            {expandedTask.attachment?.url && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-white">
                    <Paperclip className="w-4 h-4" />
                    {expandedTask.attachment.name || 'Ek'}
                  </span>
                  <a
                    href={expandedTask.attachment.url}
                    download
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-xs text-emerald-200 hover:border-emerald-300 hover:text-white transition"
                  >
                    İndir
                  </a>
                </div>
                {!isImageAttachment(expandedTask.attachment) && (
                  <p className="text-[11px] text-white/60">
                    Görsel önizlemesi yoktur, dosyayı indirerek görüntüleyin.
                  </p>
                )}
              </div>
            )}
            <div className="space-y-2">
              <MentionTextarea
                key={`${expandedTask.id}-${taskPreview?.intent ?? 'view'}`}
                value={commentInputs[expandedTask.id] || ''}
                onChange={(text) => handleCommentInputChange(expandedTask.id, text)}
                users={users}
                rows={3}
                placeholder=""
                className="w-full px-3 py-2 text-sm text-white bg-white/10 border border-white/20 rounded-lg resize-none focus:outline-none focus:border-emerald-400"
                autoFocus={shouldAutoFocusComment}
              />
              <div className="flex gap-2 pt-1 justify-end">
                <Button
                  type="button"
                  className="px-3 py-1 text-xs font-semibold text-black bg-emerald-400/90 rounded-full hover:bg-emerald-300/90"
                  disabled={commentSubmittingId === expandedTask.id}
                  onClick={() => handleSubmitComment(expandedTask)}
                >
                  {commentSubmittingId === expandedTask.id ? 'Gönderiliyor...' : 'Yanıtı kaydet'}
                </Button>
                <Button
                  type="button"
                  className="px-3 py-1 text-xs text-white border border-white/30 rounded-full hover:bg-white/10"
                  onClick={() => {
                    if (expandedTask) {
                      setCommentInputs(prev => ({ ...prev, [expandedTask.id]: '' }));
                    }
                    closeTaskPreview();
                  }}
                >
                  Kapat
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Tasks;
