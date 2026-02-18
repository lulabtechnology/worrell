import { ASSETS, BRAND, CTAS, WHATSAPP_DEFAULT_MSG } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { ResponsivePicture } from "@/components/media/ResponsivePicture";
import { CountUp } from "@/components/motion/CountUp";

export function Hero() {
  const waPrimary = buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <ResponsivePicture
          desktopSrc={ASSETS.heroDesktop}
          mobileSrc={ASSETS.heroMobile}
          alt="WORRELL — fondo hero"
          priority
          className="h-full w-full"
          imgClassName="h-[860px] w-full object-cover opacity-[0.33] sm:h-[900px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A2B]/30 via-[#070A2B]/75 to-[#05071f]" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                <Badge>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4FD1FF]" />
                  Atención directa
                </Badge>
                <Badge>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4FD1FF]" />
                  Respaldo técnico
                </Badge>
                <Badge>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4FD1FF]" />
                  Acompañamiento total
                </Badge>
              </div>

              <h1 className="mt-6 font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Seguros con enfoque patrimonial
                <span className="text-white/70"> para proteger lo que ya construiste.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {BRAND.tagline}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={waPrimary} variant="primary" size="lg">
                  {CTAS.primary}
                </ButtonLink>
                <ButtonLink href="#contacto" variant="secondary" size="lg">
                  {CTAS.alt1}
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="premium-ring glass soft-shadow rounded-2xl px-4 py-4">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/55">EXPERIENCIA</div>
                  <div className="mt-2 text-sm text-white/90">
                    <span className="text-white">
                      <CountUp to={19} suffix="+" />
                    </span>{" "}
                    años estructurando soluciones
                  </div>
                </div>

                <div className="premium-ring glass soft-shadow rounded-2xl px-4 py-4">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/55">ESTRATEGIA</div>
                  <div className="mt-2 text-sm text-white/90">Diagnóstico y propuesta a tu medida</div>
                </div>

                <div className="premium-ring glass soft-shadow rounded-2xl px-4 py-4">
                  <div className="text-xs font-semibold tracking-[0.18em] text-white/55">SOPORTE</div>
                  <div className="mt-2 text-sm text-white/90">Post-emisión, reclamos y revisión anual</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="premium-ring relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 p-6 backdrop-blur-xl">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-80"
                  style={{
                    background:
                      "radial-gradient(700px 450px at 25% 25%, rgba(0,0,144,.55), transparent 65%), radial-gradient(650px 450px at 75% 65%, rgba(79,209,255,.16), transparent 60%)"
                  }}
                />
                <div className="relative">
                  <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
                    DIAGNÓSTICO FINANCIERO
                  </div>

                  <div className="mt-5 grid gap-3">
                    {[
                      { title: "Vida patrimonial", desc: "Suma asegurada según ingresos, deudas y proyección." },
                      { title: "Salud (local/internacional)", desc: "Evita que hospitalizaciones consuman tus ahorros." },
                      { title: "Créditos e hipoteca", desc: "Que una contingencia no deje deudas a tu familia." }
                    ].map((x) => (
                      <div
                        key={x.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/7"
                      >
                        <div className="text-sm font-semibold text-white">{x.title}</div>
                        <div className="mt-1 text-sm text-white/70">{x.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <ButtonLink href={waPrimary} variant="secondary" size="md" className="w-full justify-center">
                      {CTAS.alt3}
                    </ButtonLink>
                    <p className="mt-3 text-xs text-white/60">
                      Respuesta rápida. Atención directa por WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="h-12 sm:h-16" />
      </Container>
    </section>
  );
}
