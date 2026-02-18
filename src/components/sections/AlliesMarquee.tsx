"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

function buildAllies() {
  return Array.from({ length: 12 }).map((_, i) => `/media/aliados/a${i + 1}.webp`);
}

export function AlliesMarquee() {
  const allies = buildAllies();
  const doubled = [...allies, ...allies];

  return (
    <section id="aliados" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="text-xs font-semibold tracking-[0.22em] text-white/55">CONFIANZA</div>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Aliados y aseguradoras</h2>
          <p className="mt-4 max-w-2xl text-white/70 sm:text-lg">
            Trabajamos con aseguradoras reconocidas para comparar opciones, coberturas y condiciones con criterio técnico.
          </p>

          <div className="mt-10 premium-ring glass rounded-3xl p-5 sm:p-6">
            <div className="marquee">
              <div className="marquee-track">
                {doubled.map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    className="premium-ring flex h-16 w-[170px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4"
                  >
                    <div
                      aria-hidden="true"
                      className="h-10 w-full"
                      style={{
                        backgroundImage: `url('${src}')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        filter: "grayscale(1)",
                        opacity: 0.9
                      }}
                    />
                    <span className="sr-only">Aseguradora</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { t: "Comparación", d: "Opciones y coberturas claras." },
                { t: "Estrategia", d: "No solo precio: protección real." },
                { t: "Acompañamiento", d: "De cotización a emisión." }
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-white">{x.t}</div>
                  <div className="mt-1 text-sm text-white/70">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
