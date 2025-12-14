"use client";
import React from "react";
import { cn } from "../../lib/utils";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Component = "div",
  duration = 1,
  clockwise = true,
  ...otherProps
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: any;
  duration?: number;
  clockwise?: boolean;
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component
      className={cn(
        "relative inline-flex h-min w-fit rounded-full border border-neutral-200 bg-white p-px text-xs font-semibold leading-6 text-neutral-900 no-underline shadow-2xl shadow-gray-900/50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white",
        containerClassName
      )}
      style={
        {
          "--duration": duration + "s",
          "--direction": clockwise ? "normal" : "reverse",
        } as React.CSSProperties
      }
      {...otherProps}
    >
      <span
        className={cn(
          "relative flex h-full w-full items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-black no-underline transition-all duration-200 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800",
          className
        )}
      >
        {children}
      </span>
      <span className="absolute inset-0 flex items-center w-full h-full border rounded-full border-neutral-200 bg-gradient-conic from-red-500 via-purple-500 via-blue-500 via-green-500 via-red-500 dark:border-neutral-700">
        <span className="w-full h-full transition-all duration-200 rounded-full opacity-0 animate-spin bg-gradient-conic from-red-500 via-purple-500 via-blue-500 via-green-500 via-red-500 blur-sm hover:opacity-100 dark:from-red-500 dark:via-purple-500 dark:via-blue-500 dark:via-green-500 dark:via-red-500" />
      </span>
    </Component>
  );
};
