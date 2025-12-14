import React from 'react';
import { Download, Paperclip, X } from 'lucide-react';

export type AttachmentMeta = {
  name?: string;
  type?: string;
  url?: string;
  thumbnail_url?: string;
  size?: number;
};

interface AttachmentBadgeProps {
  attachment: AttachmentMeta;
  onRemove?: () => void;
  className?: string;
  compact?: boolean;
}

const AttachmentBadge: React.FC<AttachmentBadgeProps> = ({
  attachment,
  onRemove,
  className = '',
  compact = false,
}) => {
  if (!attachment?.url) {
    return null;
  }

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/5 px-2 py-1 text-xs text-white/80 ${compact ? '' : 'mt-1'} ${className}`}
    >
      <span className="flex items-center gap-1">
        <Paperclip className="w-3 h-3" />
        <span className="max-w-[140px] truncate">{attachment.name || 'Ek'}</span>
      </span>
      <div className="flex items-center gap-1">
        <a
          href={attachment.url}
          download
          className="inline-flex items-center gap-1 rounded-full border border-white/20 px-2 py-0.5 text-[11px] text-emerald-200 hover:border-emerald-300 hover:text-white transition"
        >
          <Download className="w-3 h-3" /> İndir
        </a>
        {onRemove && (
          <button
            type="button"
            className="p-1 rounded-full hover:bg-white/10 text-white/70 transition"
            onClick={onRemove}
            title="Ekli dosyayı kaldır"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AttachmentBadge;
