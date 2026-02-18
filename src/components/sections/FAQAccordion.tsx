"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    q: "¿Esto es solo una cotización?",
    a: "No. Primero se realiza un diagnóstico financiero para definir la estrategia y luego se comparan opciones."
  },
  {
    q: "¿Trabajan salud local e internacional?",
    a: "Sí. Se evalúa presupuesto, necesidad de cobertura y riesgo financiero para recomendar la alternativa adecuada."
  },
  {
    q: "¿Pueden ayudar si tengo hipoteca o créditos?",
    a: "Sí. Parte del diagnóstico es identificar deudas y asegurar continuidad financiera ante contingencias."
  },
  {
    q: "¿Qué pasa después de emitir la póliza?",
    a: "Hay seguimiento post emisión, revisión anual de cobertura y apoyo en reclamaciones."
  },
  {
    q: "¿Cómo inicia el proceso?",
    a: "Con un mensaje por WhatsApp. Respondes unas preguntas y se agenda el diagnóstico."
  }
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
            PREGUNTAS FRECUENTES
          </div>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            FAQ
          </h2>
          <p className="mt-4 max-w-2xl text-white/70 sm:text-lg">
            Respuestas claras para tomar decisiones con confianza.
          </p>

          <div className="mt-10 premium-ring glass rounded-3xl p-4 sm:p-6">
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5">
                    <button
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-white">{f.q}</span>
                      <span
                        className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/12 bg-white/6 text-white"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-sm leading-relaxed text-white/70">
                          {f.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
