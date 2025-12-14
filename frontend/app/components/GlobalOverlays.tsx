"use client";

import React, { useEffect, useState } from "react";
import ChatPopup from "./ChatPopup";
import DirectChatWindow from "./DirectChatWindow";
import { useWebSocket } from "./WebSocketProvider";

const GlobalOverlays: React.FC = () => {
  const { directChatWindows, closeDirectChat, connectionAlert } = useWebSocket();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const evaluateAuth = () => {
      try {
        setIsAuthenticated(Boolean(window.localStorage.getItem("access_token")));
      } catch {
        setIsAuthenticated(false);
      }
    };

    evaluateAuth();

    const handleAuthUpdate = () => evaluateAuth();
    window.addEventListener("auth-token-updated", handleAuthUpdate);
    window.addEventListener("storage", handleAuthUpdate);

    return () => {
      window.removeEventListener("auth-token-updated", handleAuthUpdate);
      window.removeEventListener("storage", handleAuthUpdate);
    };
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      {connectionAlert && (
        <div className="fixed inset-x-0 top-4 z-[1200] flex justify-center px-4">
          <div
            className={`w-full max-w-3xl rounded-2xl border px-4 py-3 text-sm font-semibold shadow-lg ${
              connectionAlert.severity === 'warning'
                ? 'bg-yellow-500/90 text-black border-yellow-400'
                : connectionAlert.severity === 'error'
                  ? 'bg-red-500/80 text-white border-red-400'
                  : 'bg-emerald-500/80 text-black border-emerald-400'
            }`}
          >
            {connectionAlert.message}
          </div>
        </div>
      )}
      <ChatPopup />
      {directChatWindows.map((chat, index) => (
        <DirectChatWindow
          key={chat.id}
          windowId={chat.id}
          recipient={chat.recipient}
          offsetIndex={index}
          onClose={closeDirectChat}
        />
      ))}
    </>
  );
};

export default GlobalOverlays;
