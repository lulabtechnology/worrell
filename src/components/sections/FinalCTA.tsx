"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CTAS, WHATSAPP_DEFAULT_MSG } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/motion/Reveal";

type FormState = {
  nombre: string;
  perfil: string;
  tieneHijos: string;
  tieneHipoteca: string;
  prioridad: string;
};

const profiles = [
  "Profesional independiente",
  "Empresario / dueño de negocio",
  "Ejecutivo / gerente",
  "Familia con hijos",
  "Tengo hipoteca / crédito",
  "Otro"
];

const priorities = [
  "Evaluar mi nivel de protección",
  "Proteger a mi familia",
  "Proteger mi patrimonio ante enfermedad",
  "Respaldar hipoteca/créditos",
  "Cotizar opciones"
];

function buildMessage(s: FormState) {
  const lines = [
    WHATSAPP_DEFAULT_MSG,
    "",
    "Datos rápidos:",
    `• Nombre: ${s.nombre || "—"}`,
    `• Perfil: ${s.perfil || "—"}`,
    `• Hijos/dependientes: ${s.tieneHijos || "—"}`,
    `• Hipoteca/crédito: ${s.tieneHipoteca || "—"}`,
    `• Prioridad: ${s.prioridad || "—"}`
  ];
  return lines.join("\n");
}

export function FinalCTA() {
  const [state, setState] = useState<FormState>({
    nombre: "",
    perfil: profiles[0],
    tieneHijos: "Sí",
    tieneHipoteca: "Sí",
    prioridad: priorities[0]
  });

  const waPrimary = useMemo(() => buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG), []);
  const message = useMemo(() => buildMessage(state), [state]);
  const waForm = useMemo(() => buildWhatsAppUrl(message), [message]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waForm, "_blank", "noreferrer");
  };

  return (
    <section id="contacto" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="premium-ring relative overflow-hidden rounded-3xl border border-white/10 bg-[#05071f] p-6 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(900px 600px at 20% 30%, rgba(0,0,144,.55), transparent 65%), radial-gradient(800px 600px at 85% 70%, rgba(79,209,255,.18), transparent 60%)"
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
                  CTA FINAL
                </div>
                <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  ¿Listo para evaluar tu nivel de protección?
                </h3>
                <p className="mt-4 max-w-xl text-white/70 sm:text-lg">
                  Responde 30 segundos y abre WhatsApp con un mensaje inteligente. Sin formularios “fríos”, sin backend.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={waPrimary} variant="primary" size="lg">
                    {CTAS.primary}
                  </ButtonLink>
                  <ButtonLink href={waPrimary} variant="secondary" size="lg">
                    {CTAS.alt2}
                  </ButtonLink>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { t: "Sin costo", d: "Primera orientación por WhatsApp." },
                    { t: "Claro", d: "Decisiones con contexto y números." },
                    { t: "Directo", d: "Atención sin intermediarios." }
                  ].map((x) => (
                    <div key={x.t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-sm font-semibold text-white">{x.t}</div>
                      <div className="mt-1 text-sm text-white/70">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <form onSubmit={onSubmit} className="premium-ring glass rounded-3xl p-6 sm:p-7">
                  <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
                    MINI FORM INTELIGENTE
                  </div>

                  <label className="mt-4 block text-sm text-white/75">
                    Nombre
                    <input
                      value={state.nombre}
                      onChange={(e) => setState((s) => ({ ...s, nombre: e.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/25 focus:bg-white/8"
                      placeholder="Ej: Carlos Pérez"
                    />
                  </label>

                  <label className="mt-4 block text-sm text-white/75">
                    Perfil
                    <select
                      value={state.perfil}
                      onChange={(e) => setState((s) => ({ ...s, perfil: e.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white outline-none transition focus:border-white/25 focus:bg-white/8"
                    >
                      {profiles.map((p) => (
                        <option key={p} value={p} className="text-black">
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <label className="block text-sm text-white/75">
                      Hijos/dependientes
                      <select
                        value={state.tieneHijos}
                        onChange={(e) => setState((s) => ({ ...s, tieneHijos: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white outline-none transition focus:border-white/25 focus:bg-white/8"
                      >
                        {["Sí", "No"].map((x) => (
                          <option key={x} value={x} className="text-black">
                            {x}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block text-sm text-white/75">
                      Hipoteca/crédito
                      <select
                        value={state.tieneHipoteca}
                        onChange={(e) => setState((s) => ({ ...s, tieneHipoteca: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white outline-none transition focus:border-white/25 focus:bg-white/8"
                      >
                        {["Sí", "No"].map((x) => (
                          <option key={x} value={x} className="text-black">
                            {x}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="mt-4 block text-sm text-white/75">
                    Prioridad
                    <select
                      value={state.prioridad}
                      onChange={(e) => setState((s) => ({ ...s, prioridad: e.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white outline-none transition focus:border-white/25 focus:bg-white/8"
                    >
                      {priorities.map((p) => (
                        <option key={p} value={p} className="text-black">
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>

                  <button
                    type="submit"
                    className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#000090] px-6 text-sm font-medium text-white shadow-[0_14px_40px_rgba(0,0,144,.28)] transition hover:bg-[#0B0FC2] active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05071f]"
                  >
                    Abrir WhatsApp con mi diagnóstico
                  </button>

                  <p className="mt-3 text-xs text-white/60">
                    Esto abre WhatsApp usando: https://wa.me/ + tu número y un mensaje prellenado.
                  </p>

                  {/* fallback link */}
                  <div className="mt-3">
                    <ButtonLink href={waForm} variant="ghost" size="sm" className="w-full justify-center">
                      Ver enlace de WhatsApp (fallback)
                    </ButtonLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
