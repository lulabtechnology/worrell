import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { BRAND, CTAS, WHATSAPP_DEFAULT_MSG } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const whatsapp = buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG);

  return (
    <>
      {/* HERO (skeleton premium — sin imágenes aún) */}
      <section className="relative overflow-hidden py-18 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  <Badge>19+ años de experiencia</Badge>
                  <Badge>Atención directa</Badge>
                  <Badge>Acompañamiento total</Badge>
                </div>

                <h1 className="mt-6 font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  Planificación financiera con seguros
                  <span className="text-white/70"> que protege tu patrimonio.</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                  {BRAND.tagline}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href={whatsapp} variant="primary" size="lg">
                    {CTAS.primary}
                  </ButtonLink>
                  <ButtonLink href="#contacto" variant="secondary" size="lg">
                    {CTAS.alt1}
                  </ButtonLink>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Diagnóstico", v: "personalizado" },
                    { k: "Estrategia", v: "con respaldo técnico" },
                    { k: "Soporte", v: "post-emisión" }
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="glass soft-shadow rounded-2xl px-4 py-4"
                    >
                      <div className="text-xs font-semibold tracking-[0.18em] text-white/55">
                        {x.k.toUpperCase()}
                      </div>
                      <div className="mt-2 text-sm text-white/85">{x.v}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                {/* Visual placeholder: no usa <img> para evitar icono roto */}
                <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 p-6 backdrop-blur-xl">
                  <div className="absolute inset-0 opacity-80"
                    style={{
                      background:
                        "radial-gradient(600px 400px at 30% 20%, rgba(0,0,144,.55), transparent 60%), radial-gradient(600px 400px at 70% 60%, rgba(79,209,255,.18), transparent 60%)"
                    }}
                  />
                  <div className="relative">
                    <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
                      PREVIEW VISUAL
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="h-10 w-3/4 rounded-xl bg-white/10" />
                      <div className="h-4 w-full rounded-lg bg-white/8" />
                      <div className="h-4 w-11/12 rounded-lg bg-white/8" />
                      <div className="h-4 w-10/12 rounded-lg bg-white/8" />
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-2xl bg-white/8" />
                        <div className="h-20 rounded-2xl bg-white/8" />
                      </div>
                      <div className="mt-4 h-12 rounded-2xl bg-white/10" />
                    </div>

                    <p className="mt-6 text-sm text-white/70">
                      En FASE 2 integramos imágenes responsive, sección video, cards WOW,
                      carruseles, testimonios y FAQ.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Skeleton sections (bonitas, listas para completar en FASE 2) */}
      <SectionShell
        id="dolor"
        eyebrow="CONTEXTO"
        title="Lo que está en juego cuando no hay un plan"
        subtitle="Aquí irá el bloque emocional + bullets y el video (placeholder listo para reemplazar)."
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="glass rounded-3xl p-6 lg:col-span-7">
            <div className="h-5 w-2/3 rounded-lg bg-white/10" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full rounded-lg bg-white/8" />
              <div className="h-4 w-11/12 rounded-lg bg-white/8" />
              <div className="h-4 w-10/12 rounded-lg bg-white/8" />
            </div>
            <div className="mt-6 space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-5 w-10/12 rounded-lg bg-white/8" />
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 lg:col-span-5">
            <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
              VIDEO (MP4)
            </div>
            <div className="mt-4 aspect-video rounded-2xl border border-white/12 bg-white/6" />
            <p className="mt-4 text-sm text-white/65">
              Placeholder: /public/media/video/dolor.mp4 + poster.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="soluciones"
        eyebrow="SOLUCIONES"
        title="Protección diseñada a tu medida"
        subtitle="Cards premium con íconos, hover lift y micro-animación."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass rounded-3xl p-6 transition hover:-translate-y-[2px] hover:bg-white/8">
              <div className="h-10 w-10 rounded-2xl bg-white/10" />
              <div className="mt-4 h-5 w-2/3 rounded-lg bg-white/10" />
              <div className="mt-3 space-y-2">
                <div className="h-4 w-full rounded-lg bg-white/8" />
                <div className="h-4 w-10/12 rounded-lg bg-white/8" />
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="proceso"
        eyebrow="METODO"
        title="Cómo trabajamos"
        subtitle="Timeline animada (3–5 pasos) en FASE 2."
      >
        <div className="glass rounded-3xl p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="h-6 w-10 rounded-full bg-white/10" />
                <div className="mt-4 h-5 w-3/4 rounded-lg bg-white/10" />
                <div className="mt-3 h-4 w-full rounded-lg bg-white/8" />
                <div className="mt-2 h-4 w-10/12 rounded-lg bg-white/8" />
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="aliados"
        eyebrow="CONFIANZA"
        title="Aliados y aseguradoras"
        subtitle="Grid / carrusel con logos (a1.webp…a12.webp) en FASE 2."
      >
        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <div className="h-8 w-full rounded-xl bg-white/8" />
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="testimonios"
        eyebrow="RESULTADOS"
        title="Testimonios"
        subtitle="Slider premium en FASE 2 (t1.webp…t6.webp)."
      >
        <div className="glass rounded-3xl p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="h-5 w-2/3 rounded-lg bg-white/10" />
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full rounded-lg bg-white/8" />
                  <div className="h-4 w-11/12 rounded-lg bg-white/8" />
                  <div className="h-4 w-10/12 rounded-lg bg-white/8" />
                </div>
                <div className="mt-6 h-10 w-10 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="faq"
        eyebrow="PREGUNTAS"
        title="FAQ"
        subtitle="Acordeón accesible en FASE 2."
      >
        <div className="glass rounded-3xl p-6">
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="h-5 w-2/3 rounded-lg bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* CTA final skeleton */}
      <section id="contacto" className="py-18 sm:py-22">
        <Container>
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#05071f] p-8 sm:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(800px 500px at 20% 30%, rgba(0,0,144,.55), transparent 62%), radial-gradient(700px 500px at 85% 70%, rgba(79,209,255,.18), transparent 60%)"
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h3 className="font-display text-3xl text-white sm:text-4xl">
                  ¿Listo para evaluar tu nivel de protección?
                </h3>
                <p className="mt-4 max-w-xl text-white/70">
                  En FASE 2 aquí colocamos el mini formulario inteligente que abre WhatsApp con mensaje prellenado.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={whatsapp} variant="primary" size="lg">
                    {CTAS.primary}
                  </ButtonLink>
                  <ButtonLink href={whatsapp} variant="secondary" size="lg">
                    {CTAS.alt2}
                  </ButtonLink>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="glass rounded-3xl p-6">
                  <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
                    MINI FORM (PLACEHOLDER)
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="h-11 rounded-2xl bg-white/8" />
                    <div className="h-11 rounded-2xl bg-white/8" />
                    <div className="h-11 rounded-2xl bg-white/8" />
                    <div className="h-12 rounded-2xl bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
