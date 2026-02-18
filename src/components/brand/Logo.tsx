import { cn } from "@/lib/utils";
import { ASSETS, BRAND } from "@/lib/constants";

export function Logo({
  variant = "dark",
  className
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const bg = variant === "light" ? ASSETS.logoLight : ASSETS.logoDark;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Usamos background-image para evitar “broken image icon” si aún no subes el logo */}
      <div
        aria-hidden="true"
        className="h-9 w-28 rounded-lg"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center"
        }}
      />
      <span className="sr-only">{BRAND.name}</span>

      {/* Fallback visible (marca) */}
      <div className="leading-none">
        <div className="text-sm font-semibold tracking-wide text-white">
          WORRELL
        </div>
        <div className="text-[11px] text-white/65">Asesores en Seguros</div>
      </div>
    </div>
  );
}
