// Generic card wrapper — use for service cards, testimonial cards, etc.
// Source: design-system.md §5 Cards
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border p-6 transition-all duration-200",
        hover &&
          "hover:border-accent hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] cursor-pointer",
        className
      )}
      style={{ borderColor: "var(--border)" }}
    >
      {children}
    </div>
  );
}
