import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="premium-ring glass rounded-3xl p-8 sm:p-12">
          <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
            404
          </div>
          <h1 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            Página no encontrada
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            La ruta que buscas no existe o fue movida. Regresa al inicio para continuar.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#000090] px-6 text-sm font-medium text-white shadow-[0_14px_40px_rgba(0,0,144,.28)] transition hover:bg-[#0B0FC2] active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A2B]"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
