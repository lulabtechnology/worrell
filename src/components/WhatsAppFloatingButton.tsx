"use client";

import { WHATSAPP_DEFAULT_MSG } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  const href = buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-3 text-sm font-medium text-white shadow-[0_18px_60px_rgba(0,0,0,.35)] backdrop-blur-xl transition hover:bg-white/14 active:translate-y-[1px]"
      aria-label="Abrir WhatsApp para solicitar asesoría"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/20">
        {/* WhatsApp icon (inline SVG) */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12.04 2C6.57 2 2.12 6.36 2.12 11.72c0 1.72.46 3.4 1.33 4.88L2 22l5.56-1.41a10.2 10.2 0 0 0 4.48 1.03c5.47 0 9.92-4.36 9.92-9.72C21.96 6.36 17.5 2 12.04 2Z"
            stroke="rgba(255,255,255,.9)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 8.7c-.2-.46-.4-.48-.6-.49h-.52c-.18 0-.47.07-.72.33-.25.26-.95.9-.95 2.2 0 1.29.98 2.54 1.11 2.72.14.18 1.9 3 4.67 4.08 2.3.9 2.77.72 3.27.68.5-.04 1.6-.64 1.83-1.25.23-.6.23-1.11.16-1.25-.07-.14-.25-.2-.52-.33-.27-.14-1.6-.77-1.85-.86-.25-.1-.43-.14-.62.14-.18.28-.7.86-.85 1.04-.16.18-.32.2-.6.07-.27-.14-1.14-.41-2.17-1.31-.8-.7-1.33-1.56-1.49-1.83-.16-.28-.01-.43.12-.56.12-.12.27-.32.4-.48.14-.16.18-.28.27-.46.09-.18.04-.35-.02-.49-.07-.14-.58-1.4-.8-1.92Z"
            fill="rgba(255,255,255,.9)"
          />
        </svg>
      </span>
      WhatsApp
    </a>
  );
}
