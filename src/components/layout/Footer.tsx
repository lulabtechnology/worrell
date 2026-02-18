import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BRAND } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070A2B] py-12">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">{BRAND.name}</div>
            <div className="mt-1 text-sm text-white/60">
              © {year} — Todos los derechos reservados.
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/privacidad" className="hover:text-white transition">
              Privacidad
            </Link>
            <a href="#contacto" className="hover:text-white transition">
              Contacto
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
