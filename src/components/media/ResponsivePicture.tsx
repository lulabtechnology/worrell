"use client";

import { useMemo, useState } from "react";
import { ASSETS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ResponsivePicture({
  desktopSrc,
  mobileSrc,
  alt,
  className,
  imgClassName,
  priority,
  sizes
}: Props) {
  const [failed, setFailed] = useState(false);

  const fallback = useMemo(() => ASSETS.placeholder, []);

  if (failed) {
    return (
      <img
        src={fallback}
        alt={alt}
        className={cn("block h-full w-full object-cover", imgClassName)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    <div className={cn("relative", className)}>
      {/* Fondo elegante siempre visible (aunque no haya imágenes) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 30% 20%, rgba(0,0,144,.55), transparent 65%), radial-gradient(800px 600px at 75% 65%, rgba(79,209,255,.18), transparent 60%), linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))"
        }}
      />

      <picture className="relative block">
        <source media="(min-width: 768px)" srcSet={desktopSrc} />
        <img
          src={mobileSrc}
          alt={alt}
          className={cn("block h-full w-full object-cover", imgClassName)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes={sizes}
          onError={() => setFailed(true)}
        />
      </picture>
    </div>
  );
}
