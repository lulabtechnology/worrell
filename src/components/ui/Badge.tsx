import { cn } from "@/lib/utils";

export function Badge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-1 text-xs text-white/80 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </span>
  );
}
