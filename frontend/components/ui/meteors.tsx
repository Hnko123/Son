"use client";

import React, { useMemo, useState, useEffect } from "react";

export const Meteors = ({
  number = 20,
  className = "",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate meteor data only after component mounts to avoid hydration mismatch
  const meteors = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: number }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      transform: `rotate(${Math.random() * 360}deg)`,
      animationDelay: `${Math.random() * 20}s`,
      animationDuration: `${Math.random() * 10 + 10}s`,
    }));
  }, [number, mounted]);

  // Don't render anything until component is mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={`animate-meteor absolute h-1 w-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-60 ${className}`}
          style={{
            top: meteor.top,
            left: meteor.left,
            transform: meteor.transform,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 blur-sm"></div>
        </span>
      ))}
    </div>
  );
};
