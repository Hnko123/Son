"use client"

import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from "date-fns";
import { ChevronLeft, ChevronRight, FileText, X } from 'lucide-react';
import ScopeToggle, { ViewScope } from './ui/scope-toggle';

interface NoteData {
  note: string;
  userId?: number;
}

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [notes, setNotes] = useState<Record<string, NoteData>>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [dataScope, setDataScope] = useState<ViewScope>("global");
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  const getAuthHeaders = useCallback((): Record<string, string> => {
    if (typeof window === "undefined") return {};
    const token = window.localStorage.getItem("access_token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem("user");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.id) {
          setCurrentUserId(parsed.id);
        }
      }
    } catch (err) {
      console.warn("Calendar user state could not be parsed", err);
    }
  }, []);

  // Load notes from backend on component mount
  const fetchCalendarNotes = useCallback(async () => {
    try {
      const params = new URLSearchParams({ scope: dataScope });
      const headers = {
        Accept: "application/json",
      };
      Object.assign(headers, getAuthHeaders());
      const response = await fetch(`/api/calendar/notes?${params.toString()}`, {
        headers,
      });
      if (!response.ok) {
        throw new Error(`Calendar notları yüklenemedi (${response.status})`);
      }
      const data = await response.json();
      setNotes(data || {});
    } catch (error) {
      console.error("Calendar notları alınamadı:", error);
    }
  }, [dataScope, getAuthHeaders]);

  useEffect(() => {
    fetchCalendarNotes();
  }, [fetchCalendarNotes]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleDayClick = (date: Date) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    const existingNote = notes[dateKey] || { note: '', userId: undefined };

    setSelectedDate(date);
    setCurrentNote(existingNote.note);
    setIsModalOpen(true);
  };

  const saveNote = async () => {
    if (!selectedDate) {
      return;
    }

    const dateKey = format(selectedDate, 'yyyy-MM-dd');
    const updatedNote: NoteData = {
      note: currentNote,
      userId: undefined
    };

    // Save to backend
    try {
      const params = new URLSearchParams({ scope: dataScope });
        const headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
        Object.assign(headers, getAuthHeaders());
        const response = await fetch(`/api/calendar/notes?${params.toString()}`, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            date: dateKey,
            note: updatedNote
          }),
        });

      if (response.ok) {
        setNotes(prev => ({
          ...prev,
          [dateKey]: updatedNote
        }));
        setIsModalOpen(false);
        setCurrentNote("");
      }
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const previousMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

  return (
    <div className="flex flex-col h-full p-4 bg-transparent">
      {/* Calendar Header */}
      <div className="flex flex-col gap-3 mb-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-white">
            {format(currentMonth, 'MMMM yyyy')}
          </h1>
          <ScopeToggle
            scope={dataScope}
            onScopeChange={(value) => setDataScope(value)}
            disabledPersonal={!currentUserId}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={previousMonth}
            className="p-2 text-white rounded hover:bg-white/10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 text-white rounded hover:bg-white/10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid flex-1 grid-cols-7 gap-2">
        {/* Day Headers */}
        {dayNames.map(day => (
          <div key={day} className="py-2 text-sm font-medium text-center text-white/60">
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {calendarDays.map(date => {
          const dateKey = format(date, 'yyyy-MM-dd');
          const hasNote = !!notes[dateKey]?.note?.trim();
          const isTodayDate = isToday(date);

          return (
            <div
              key={date.toISOString()}
              onClick={() => handleDayClick(date)}
              className={`
                relative cursor-pointer rounded-lg p-2 hover:bg-white/10
                transition-colors flex flex-col justify-between
                min-h-[120px] group border border-white/50
                ${isTodayDate ? 'bg-white/10 border-white/20' : ''}
                ${hasNote ? 'animate-pulse bg-sky-400/50 border-sky-400/60' : ''}
              `}
            >
              {/* Note content at the top */}
              {hasNote && (
                <div className="text-xs text-white/80 line-clamp-3 px-1 pt-1 overflow-hidden">
                  {notes[dateKey].note}
                </div>
              )}

              {/* Date number at bottom-right */}
              <div className="flex justify-end">
                <span className={`text-white font-medium ${isTodayDate ? 'text-blue-400' : ''}`}>
                  {date.getDate()}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md p-6 mx-4 border rounded-lg bg-black/90 border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">
                {selectedDate ? format(selectedDate, 'PPP') : 'Tarih Seçiniz'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-white">
                Not
              </label>
              <textarea
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                placeholder="Bu tarihe ait notunuzu girin..."
                rows={4}
                className="w-full p-3 text-white border rounded resize-none bg-black/50 border-white/20 placeholder:text-white/50 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 text-white transition-colors bg-gray-600 rounded hover:bg-gray-500"
              >
                İptal
              </button>
              <button
                onClick={saveNote}
                className="flex-1 px-4 py-2 text-white transition-colors bg-blue-600 rounded hover:bg-blue-500"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
