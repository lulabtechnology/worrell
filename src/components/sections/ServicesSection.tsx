import { ASSETS, CTAS, WHATSAPP_DEFAULT_MSG } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ResponsivePicture } from "@/components/media/ResponsivePicture";

type Service = {
  title: string;
  desc: string;
  icon: (props: { className?: string }) => JSX.Element;
};

const IconShield = ({ className }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l8 4v6c0 5-3.4 9.3-8 10-4.6-.7-8-5-8-10V6l8-4Z" stroke="rgba(255,255,255,.9)" strokeWidth="1.6" />
    <path d="M9.2 12.2l1.7 1.7L15.6 9.2" stroke="rgba(79,209,255,.95)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPulse = ({ className }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12h3l2-5 4 10 2-5h5" stroke="rgba(79,209,255,.95)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 6.5C6.2 4.4 9 3 12 3c5 0 9 3.6 9 9s-4 9-9 9-9-3.6-9-9c0-.7.1-1.4.3-2.1" stroke="rgba(255,255,255,.65)" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const IconBriefcase = ({ className }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" stroke="rgba(255,255,255,.9)" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 8h16v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8Z" stroke="rgba(255,255,255,.9)" strokeWidth="1.6" />
    <path d="M4 12h16" stroke="rgba(79,209,255,.7)" strokeWidth="1.6" />
  </svg>
);

const IconCar = ({ className }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 16l1.2-6.2A2.5 2.5 0 0 1 8.7 8h6.6a2.5 2.5 0 0 1 2.5 1.8L19 16" stroke="rgba(255,255,255,.9)" strokeWidth="1.6" />
    <path d="M6 16h12" stroke="rgba(79,209,255,.85)" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M7.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="rgba(255,255,255,.85)" />
    <path d="M16.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="rgba(255,255,255,.85)" />
  </svg>
);

const IconWallet = ({ className }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5Z" stroke="rgba(255,255,255,.9)" strokeWidth="1.6" />
    <path d="M20 10h-4a2 2 0 0 0 0 4h4" stroke="rgba(79,209,255,.9)" strokeWidth="1.6" />
    <path d="M16.5 12h.01" stroke="rgba(255,255,255,.85)" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const services: Service[] = [
  {
    title: "Seguro de Vida Patrimonial",
    desc: "Suma asegurada según ingresos, deudas y proyección.",
    icon: IconShield
  },
  {
    title: "Vida con Componente de Ahorro",
    desc: "Protección + acumulación de capital de forma estratégica.",
    icon: IconWallet
  },
  {
    title: "Seguro de Salud (internacional/local)",
    desc: "Protege tu patrimonio ante enfermedades graves.",
    icon: IconPulse
  },
  {
    title: "Protección Empresarial",
    desc: "Socios, hombre clave y continuidad del negocio.",
    icon: IconBriefcase
  },
  {
    title: "Autos y ramos generales",
    desc: "Coberturas complementarias con enfoque integral.",
    icon: IconCar
  }
];

const includes = [
  "Diagnóstico financiero personalizado",
  "Propuesta estructurada con respaldo técnico",
  "Acompañamiento durante aprobación",
  "Seguimiento post emisión",
  "Asistencia en reclamaciones",
  "Revisión anual de cobertura"
];

const differentiators = [
  "19+ años estructurando soluciones",
  "Atención directa (no delega estrategia/diagnóstico)",
  "Productora destacada en distintas aseguradoras"
];

export function ServicesSection() {
  const wa = buildWhatsAppUrl(WHATSAPP_DEFAULT_MSG);

  return (
    <section id="soluciones" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-xs font-semibold tracking-[0.22em] text-white/55">SOLUCIONES</div>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Protección diseñada a tu medida
              </h2>
              <p className="mt-4 max-w-2xl text-white/70 sm:text-lg">
                Elegir un seguro no es “comprar una póliza”: es diseñar una estrategia que protege familia, patrimonio
                y continuidad financiera.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="premium-ring glass rounded-3xl p-6 transition hover:-translate-y-[2px] hover:bg-white/8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6">
                        <s.icon className="" />
                      </div>
                      <div className="h-9 w-9 rounded-2xl bg-white/0" />
                    </div>
                    <div className="mt-4 text-base font-semibold text-white">{s.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</div>
                  </div>
                ))}

                {/* Card extra para completar grid y hacer look premium */}
                <div className="premium-ring glass rounded-3xl p-6">
                  <div className="text-sm font-semibold text-white">¿No sabes por dónde empezar?</div>
                  <p className="mt-2 text-sm text-white/70">
                    Hacemos un diagnóstico financiero rápido y te mostramos tu nivel de protección actual y el ideal.
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

          <div className="lg:col-span-5">
            <Reveal delay={0.06}>
              <div className="premium-ring overflow-hidden rounded-3xl border border-white/12 bg-white/6 backdrop-blur-xl">
                <div className="relative h-56 sm:h-60">
                  <ResponsivePicture
                    desktopSrc={ASSETS.serviciosDesktop}
                    mobileSrc={ASSETS.serviciosMobile}
                    alt="Servicios — WORRELL"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover opacity-[0.52]"
                    sizes="(min-width: 1024px) 420px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05071f]/85 via-[#05071f]/30 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold tracking-[0.22em] text-white/55">QUÉ INCLUYE</div>
                  <ul className="mt-4 space-y-3">
                    {includes.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#4FD1FF]" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 text-xs font-semibold tracking-[0.22em] text-white/55">
                    DIFERENCIADORES
                  </div>
                  <ul className="mt-4 space-y-3">
                    {differentiators.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/75" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ButtonLink href="#contacto" variant="primary" size="md" className="w-full justify-center">
                      {CTAS.alt1}
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
