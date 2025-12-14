"use client";

import React from "react";

export type ViewScope = "global" | "personal";

interface ScopeToggleProps {
  scope: ViewScope;
  onScopeChange: (scope: ViewScope) => void;
  className?: string;
  disabledPersonal?: boolean;
}

const ScopeToggle: React.FC<ScopeToggleProps> = ({
  scope,
  onScopeChange,
  className = "",
  disabledPersonal = false,
}) => {
  const handleClick = (nextScope: ViewScope, enabled: boolean) => {
    if (!enabled) return;
    if (nextScope === scope) return;
    onScopeChange(nextScope);
  };

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-1.5 py-0.5 text-[11px] ${className}`}
    >
      <button
        type="button"
        onClick={() => handleClick("global", true)}
        className={`px-3 py-0.5 rounded-full font-semibold transition ${
          scope === "global"
            ? "bg-white text-black shadow-[0_0_8px_rgba(255,255,255,0.35)]"
            : "text-white/70 hover:text-white"
        }`}
        aria-pressed={scope === "global"}
      >
        Herkes
      </button>
      <button
        type="button"
        onClick={() => handleClick("personal", !disabledPersonal)}
        className={`px-3 py-0.5 rounded-full font-semibold transition ${
          scope === "personal"
            ? "bg-amber-400 text-black shadow-[0_0_8px_rgba(245,158,11,0.45)]"
            : disabledPersonal
            ? "text-white/30 cursor-not-allowed"
            : "text-white/70 hover:text-white"
        }`}
        aria-pressed={scope === "personal"}
        disabled={disabledPersonal}
        title={disabledPersonal ? "Giriş yaptıktan sonra kişisel görünüm aktif olur" : undefined}
      >
        Kişisel
      </button>
    </div>
  );
};

export default ScopeToggle;
