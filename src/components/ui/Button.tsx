import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#000090] text-white hover:bg-[#0B0FC2] shadow-[0_14px_40px_rgba(0,0,144,.28)]",
  secondary:
    "bg-white/8 text-white hover:bg-white/12 border border-white/14 backdrop-blur-xl",
  ghost:
    "bg-transparent text-white/80 hover:text-white hover:bg-white/6 border border-transparent"
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  target
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  target?: "_blank" | "_self";
}) {
  const isExternal = href.startsWith("http") || href.startsWith("https");

  return (
    <Link
      href={href}
      target={target ?? (isExternal ? "_blank" : "_self")}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A2B]",
        "active:translate-y-[1px]",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
