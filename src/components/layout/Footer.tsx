import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BRAND } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070A2B] py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-6">
            <div className="text-sm font-semibold text-white">{BRAND.name}</div>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">
              Asesoría patrimonial en seguros de vida y salud. Diagnóstico financiero y acompañamiento durante el proceso.
            </p>
            <div className="mt-4 text-sm text-white/60">© {year} — Todos los derechos reservados.</div>
          </div>

          <div className="md:col-span-6 md:flex md:justify-end">
            <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              <Link href="/privacidad" className="hover:text-white transition">
                Privacidad
              </Link>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
              <a href="#faq" className="hover:text-white transition">
                Preguntas frecuentes
              </a>
              <a href="#soluciones" className="hover:text-white transition">
                Soluciones
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs leading-relaxed text-white/60">
          <span className="font-semibold text-white/75">Nota:</span> Esta landing es informativa. La recomendación final
          de coberturas depende del diagnóstico financiero y condiciones de cada aseguradora.
        </div>
      </Container>
    </footer>
  );
}
