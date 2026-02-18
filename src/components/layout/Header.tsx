"use client";

import { useMemo, useState } from "react";
import { BRAND, NAV_LINKS, CTAS, WHATSAPP_DEFAULT_MSG } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  const whatsappHref = useMemo(() => buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG), []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A2B]/60 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-3 sm:py-4">
        <a href="#top" className="flex items-center gap-2">
          <Logo variant="light" />
          <span className="sr-only">{BRAND.name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "relative text-sm text-white/75 transition hover:text-white",
                "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-white/80 after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={whatsappHref} variant="secondary" size="sm">
            {CTAS.primary}
          </ButtonLink>
        </div>

        {/* Mobile */}
        <button
          className={cn(
            "md:hidden rounded-2xl border border-white/14 bg-white/6 px-3 py-2 text-sm text-white",
            "hover:bg-white/10 transition"
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden border-t border-white/10 bg-[#070A2B]/70 backdrop-blur-xl",
          open ? "max-h-[560px]" : "max-h-0"
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/8 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
            <ButtonLink href={whatsappHref} variant="primary" size="md" className="mt-2">
              {CTAS.primary}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
