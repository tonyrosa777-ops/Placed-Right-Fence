// Source: design-system.md §5 Component Style Rules — Buttons
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center font-body font-semibold rounded-[6px] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#0D0D0D] font-bold shadow-[0_2px_8px_rgba(201,168,76,0.35)] hover:bg-[#A8893A] hover:shadow-[0_4px_16px_rgba(201,168,76,0.45)] focus-visible:ring-accent",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
  ghost:
    "text-primary hover:text-accent underline-offset-4 hover:underline focus-visible:ring-primary",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  children,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
