"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  img?: string;
};

function buildTestimonials(): Testimonial[] {
  const imgs = Array.from({ length: 6 }).map((_, i) => `/media/testimonios/t${i + 1}.webp`);
  return [
    {
      name: "Cliente",
      role: "Profesional independiente",
      quote: "Antes sentía que pagaba un seguro sin entender la estrategia. Ahora tengo claridad y tranquilidad.",
      img: imgs[0]
    },
    {
      name: "Cliente",
      role: "Familia con hijos",
      quote: "El diagnóstico nos ayudó a ordenar prioridades: salud, vida y respaldo de la hipoteca.",
      img: imgs[1]
    },
    {
      name: "Cliente",
      role: "Empresario",
      quote: "Me gustó la atención directa y el enfoque patrimonial. No fue una ‘cotización más’.",
      img: imgs[2]
    }
  ];
}

export function TestimonialsSlider() {
  const items = useMemo(() => buildTestimonials(), []);
  const [idx, setIdx] = useState(0);

  const current = items[idx];
  const prev = () => setIdx((v) => (v - 1 + items.length) % items.length);
  const next = () => setIdx((v) => (v + 1) % items.length);

  return (
    <section id="testimonios" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="text-xs font-semibold tracking-[0.22em] text-white/55">RESULTADOS</div>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Testimonios</h2>
          <p className="mt-4 max-w-2xl text-white/70 sm:text-lg">
            Experiencias reales de personas que decidieron proteger su patrimonio con una estrategia clara.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="premium-ring glass rounded-3xl p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold text-white">Lo que dicen</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      className="rounded-2xl border border-white/12 bg-white/6 px-3 py-2 text-sm text-white hover:bg-white/10 transition"
                      aria-label="Testimonio anterior"
                    >
                      ←
                    </button>
                    <button
                      onClick={next}
                      className="rounded-2xl border border-white/12 bg-white/6 px-3 py-2 text-sm text-white hover:bg-white/10 transition"
                      aria-label="Siguiente testimonio"
                    >
                      →
                    </button>
                  </div>
                </div>

                <div className="mt-6 min-h-[170px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.45, ease: [0.21, 1, 0.21, 1] }}
                    >
                      <p className="text-lg leading-relaxed text-white/85">“{current.quote}”</p>

                      <div className="mt-6 flex items-center gap-4">
                        <div
                          className="h-12 w-12 rounded-full border border-white/12 bg-white/6"
                          style={{
                            backgroundImage: current.img ? `url('${current.img}')` : undefined,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}
                          aria-hidden="true"
                        />
                        <div>
                          <div className="text-sm font-semibold text-white">{current.name}</div>
                          <div className="text-sm text-white/65">{current.role}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-6 flex gap-2">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className="h-2.5 w-2.5 rounded-full border border-white/20 transition"
                      style={{
                        background: i === idx ? "rgba(79,209,255,.9)" : "rgba(255,255,255,.18)"
                      }}
                      aria-label={`Ir al testimonio ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="premium-ring glass rounded-3xl p-6 sm:p-8">
                <div className="text-xs font-semibold tracking-[0.22em] text-white/55">CREDENCIALES</div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Trayectoria, participación en eventos del sector y respaldo profesional para orientar decisiones con claridad.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      style={{
                        backgroundImage: `url('/media/portraits/p${i + 1}.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    >
                      <div className="h-16 w-full opacity-0">.</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
