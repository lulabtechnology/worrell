import { ASSETS, CTAS, WHATSAPP_DEFAULT_MSG } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ResponsivePicture } from "@/components/media/ResponsivePicture";

export function PainSection() {
  const wa = buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG);

  const fears = [
    "Que una enfermedad destruya el patrimonio familiar.",
    "Que una muerte inesperada deje deudas y obligaciones.",
    "Que un crédito o hipoteca quede sin respaldo.",
    "Que los ahorros se vayan en hospitalizaciones.",
    "Falta de planificación ante riesgos inevitables."
  ];

  return (
    <section id="dolor" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-xs font-semibold tracking-[0.22em] text-white/55">RIESGOS REALES</div>
              <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
                Cuando no hay un plan, lo urgente se vuelve caro.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Tener ingresos estables no significa estar protegido. Un evento inesperado puede cambiar el rumbo
                financiero de una familia o un negocio en días.
              </p>

              <div className="mt-6 grid gap-3">
                {fears.map((t) => (
                  <div key={t} className="glass premium-ring rounded-2xl px-4 py-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#4FD1FF]" />
                      <p className="text-sm text-white/80">{t}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={wa} variant="primary" size="lg">
                  {CTAS.alt1}
                </ButtonLink>
                <ButtonLink href="#contacto" variant="secondary" size="lg">
                  {CTAS.alt2}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.06}>
              <div className="premium-ring overflow-hidden rounded-3xl border border-white/12 bg-white/6 backdrop-blur-xl">
                <div className="relative h-56 sm:h-64">
                  <ResponsivePicture
                    desktopSrc={ASSETS.dolorDesktop}
                    mobileSrc={ASSETS.dolorMobile}
                    alt="Sección de riesgos — WORRELL"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover opacity-[0.55]"
                    sizes="(min-width: 1024px) 420px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05071f]/85 via-[#05071f]/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm font-semibold text-white">Mensaje clave</div>
                    <div className="mt-1 text-xs text-white/65">
                      Entiende el riesgo y decide con claridad antes de que sea tarde.
                    </div>
                  </div>
                </div>

                {/* MÁS AIRE AQUÍ */}
                <div className="p-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-semibold tracking-[0.2em] text-white/55">VIDEO</div>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      Si lo prefieres, mira este mensaje breve antes de escribirnos.
                    </p>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <video className="block w-full" controls playsInline preload="metadata" poster={ASSETS.dolorPoster}>
                      <source src={ASSETS.dolorVideo} type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </video>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-white/70">
                    Una conversación breve puede darte claridad sobre tu nivel actual de protección y qué estrategia
                    conviene según tu realidad financiera.
                  </p>

                  <div className="mt-5">
                    <ButtonLink href={wa} variant="secondary" size="md" className="w-full justify-center">
                      {CTAS.primary}
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
