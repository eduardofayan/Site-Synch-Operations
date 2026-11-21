import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { operationalFlow } from "@/lib/site";

const accentText = {
  primary: "text-primary bg-primary/15 shadow-[0_0_40px_-10px_rgba(242,106,33,0.9)]",
  secondary: "text-secondary bg-secondary/15 shadow-[0_0_40px_-10px_rgba(255,154,61,0.9)]",
  accent: "text-accent bg-accent/15 shadow-[0_0_40px_-10px_rgba(217,72,15,0.9)]",
  success: "text-success bg-success/15 shadow-[0_0_40px_-10px_rgba(16,185,129,0.9)]",
} as const;

export function OperationalFlow() {
  return (
    <section id="fluxo" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 2xl:max-w-[96rem] lg:px-8">
        <SectionHeading
          eyebrow="Fluxo operacional"
          title="Executar, controlar, analisar e decidir."
          description="Cada plataforma cumpre uma etapa do ciclo. Juntas, elas fecham o caminho entre o dado bruto e a decisão."
        />

        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-accent via-secondary to-success opacity-40 lg:block"
          />
          {operationalFlow.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className="glass relative h-full rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1">
                  <div className="mb-6 flex items-center gap-4">
                    <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${accentText[step.accent]}`}>
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <span className="font-display text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                      Etapa {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">{step.title}</h3>
                  <p className={`mt-1 text-xs font-semibold tracking-wide uppercase ${accentText[step.accent].split(" ")[0]}`}>
                    {step.platform}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
