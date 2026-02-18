import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="glass premium-ring rounded-3xl p-6 sm:p-10">
          <div className="h-6 w-2/3 rounded-xl bg-white/10" />
          <div className="mt-4 space-y-3">
            <div className="h-4 w-full rounded-lg bg-white/8" />
            <div className="h-4 w-11/12 rounded-lg bg-white/8" />
            <div className="h-4 w-10/12 rounded-lg bg-white/8" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="h-5 w-2/3 rounded-lg bg-white/10" />
                <div className="mt-3 h-4 w-full rounded-lg bg-white/8" />
                <div className="mt-2 h-4 w-10/12 rounded-lg bg-white/8" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
