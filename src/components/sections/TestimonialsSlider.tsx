"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

function buildTestimonials(): Testimonial[] {
  return [
    {
      name: "María Fernanda R.",
      role: "Ejecutiva · Ingresos estables",
      quote:
        "Me ayudaron a ordenar prioridades y entender qué cobertura tenía sentido según mi realidad. La claridad que me dieron fue lo más valioso."
    },
    {
      name: "Carlos Méndez",
      role: "Ingeniero · Padre de familia",
      quote:
        "No quería comprar “por comprar”. El diagnóstico fue directo, con números. Hoy tengo un plan que protege a mi familia y mi hipoteca."
    },
    {
      name: "Dra. Andrea Paredes",
      role: "Médico · Profesional independiente",
      quote:
        "El enfoque patrimonial me hizo cambiar la forma de verlo: no es solo precio, es protección real. El acompañamiento fue excelente."
    }
  ];
}

function initials(name: string) {
  const parts = name.replace(/\./g, "").split(" ").filter(Boolean);
  const first = parts[0]?.[0] ?? "W";
  const last = parts[1]?.[0] ?? "A";
  return (first + last).toUpperCase();
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
            Experiencias de personas que decidieron proteger su patrimonio con una estrategia clara.
          </p>

          <div className="mt-10">
            <div className="premium-ring glass mx-auto max-w-4xl rounded-3xl p-6 sm:p-8">
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
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-sm font-semibold text-white/90"
                        aria-hidden="true"
                      >
                        {initials(current.name)}
                      </div>
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
        </Reveal>
      </Container>
    </section>
  );
}
