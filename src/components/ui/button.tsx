import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "filled" | "purple" | "blue";
  size?: "sm" | "md" | "lg";
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
  ghost:
    "bg-transparent text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-secondary)]",
  filled:
    "bg-[var(--color-bg-tertiary)] text-[var(--color-fg)] hover:bg-[var(--color-border-strong)]",
  purple:
    "bg-[var(--color-purple)] text-white hover:bg-[var(--color-purple-deep)]",
  blue:
    "bg-[var(--color-blue-bright)] text-white hover:bg-[var(--color-secondary)]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-[12px]",
  md: "px-4 py-2 text-[14px]",
  lg: "px-6 py-3 text-[16px]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-[var(--radius-md)] transition-colors cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
