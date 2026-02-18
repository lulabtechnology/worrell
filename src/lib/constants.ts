export const BRAND = {
  name: "WORRELL Asesores en Seguros",
  tagline:
    "Asesoría patrimonial especializada en seguros de vida y salud para quienes valoran y priorizan la planificación financiera como una decisión de tranquilidad."
} as const;

// ⬇️ REGLA OBLIGATORIA: reemplazas tú
export const WHATSAPP_NUMBER = "507XXXXXXXX";
export const WHATSAPP_DEFAULT_MSG =
  "Hola, quiero un diagnóstico financiero para evaluar mi nivel de protección.";

export const CTAS = {
  primary: "Solicitar asesoría personalizada por WhatsApp",
  alt1: "Evaluar mi nivel de protección",
  alt2: "Quiero proteger a mi familia",
  alt3: "Pedir cotizaciones"
} as const;

export const NAV_LINKS = [
  { id: "soluciones", label: "Soluciones" },
  { id: "proceso", label: "Cómo trabajamos" },
  { id: "aliados", label: "Aliados" },
  { id: "testimonios", label: "Testimonios" },
  { id: "faq", label: "FAQ" },
  { id: "contacto", label: "Contacto" }
] as const;

// Paths (solo strings a /public)
export const ASSETS = {
  logoLight: "/brand/logo-light.png",
  logoDark: "/brand/logo-dark.png",
  heroDesktop: "/media/hero/hero-desktop.webp",
  heroMobile: "/media/hero/hero-mobile.webp",
  heroOverlay: "/media/hero/hero-overlay.webp",
  dolorDesktop: "/media/sections/dolor-desktop.webp",
  dolorMobile: "/media/sections/dolor-mobile.webp",
  dolorVideo: "/media/video/dolor.mp4",
  dolorPoster: "/media/video/dolor-poster.webp",
  serviciosDesktop: "/media/sections/servicios-desktop.webp",
  serviciosMobile: "/media/sections/servicios-mobile.webp",
  placeholder: "/media/placeholders/placeholder.webp"
} as const;
