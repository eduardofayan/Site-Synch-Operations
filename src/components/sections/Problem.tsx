import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problemPoints, problemSources } from "@/lib/site";

export function Problem() {
  return (
    <section id="problema" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 2xl:max-w-[96rem] lg:px-8">
        <SectionHeading
          eyebrow="O problema"
          title="Os dados já existem. O desafio é conectá-los."
          description="A operação gera informação em dezenas de lugares. Sem integração, cada área trabalha com um recorte diferente da realidade."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="glass relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="problem-core" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="150" r="120" fill="url(#problem-core)" />
                {[
                  "M60 60 Q 150 110 200 150",
                  "M320 40 Q 260 100 200 150",
                  "M330 200 Q 270 170 200 150",
                  "M50 220 Q 120 190 200 150",
                  "M230 270 Q 220 210 200 150",
                ].map((d) => (
                  <path key={d} d={d} fill="none" stroke="rgb(148 163 184 / 0.35)" strokeWidth="1.5" strokeDasharray="4 6" />
                ))}
              </svg>

              <div className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-red-400/30 bg-background/80 text-center text-xs font-semibold text-red-300 shadow-[0_0_40px_-8px_rgba(239,68,68,0.6)]">
                Sem
                <br />
                integração
              </div>

              {problemSources.map((source) => {
                const Icon = source.icon;
                return (
                  <div
                    key={source.label}
                    className="glass absolute flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-foreground shadow-lg animate-float"
                    style={{ top: source.top, left: source.left, animationDelay: `${source.delay}s` }}
                  >
                    <Icon size={15} className="text-secondary" aria-hidden="true" />
                    {source.label}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="space-y-5">
              {problemPoints.map((point) => (
                <li key={point} className="glass flex gap-4 rounded-2xl p-5">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                  <p className="text-base leading-relaxed text-foreground/90">{point}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
