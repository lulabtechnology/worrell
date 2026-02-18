"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  { k: "01", title: "Diagnóstico", desc: "Entendemos ingresos, deudas, dependientes y objetivos." },
  { k: "02", title: "Estrategia", desc: "Estructuramos la cobertura ideal con respaldo técnico." },
  { k: "03", title: "Cotización y ajuste", desc: "Comparas opciones, afinamos deducibles, sumas y alcance." },
  { k: "04", title: "Aprobación", desc: "Acompañamiento durante todo el proceso de emisión." },
  { k: "05", title: "Seguimiento", desc: "Post-emisión, reclamos y revisión anual de cobertura." }
];

export function ProcessTimeline() {
  return (
    <section id="proceso" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="text-xs font-semibold tracking-[0.22em] text-white/55">MÉTODO</div>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Cómo trabajamos</h2>
          <p className="mt-4 max-w-2xl text-white/70 sm:text-lg">
            Un proceso claro, con comunicación directa y decisiones informadas.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {steps.map((s, idx) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.21, 1, 0.21, 1], delay: idx * 0.06 }}
                className="premium-ring glass rounded-3xl p-6"
              >
                <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
                  PASO {s.k}
                </div>

                <div className="mt-3 text-base font-semibold text-white">{s.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</div>

                <div className="mt-6 h-[2px] w-16 rounded-full bg-white/10" />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
