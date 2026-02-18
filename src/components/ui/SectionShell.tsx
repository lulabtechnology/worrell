import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-[0.22em] text-white/55">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
