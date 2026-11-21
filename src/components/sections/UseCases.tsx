import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCases } from "@/lib/site";

const accentStyle = {
  primary: "text-primary bg-primary/15",
  secondary: "text-secondary bg-secondary/15",
  accent: "text-accent bg-accent/15",
  success: "text-success bg-success/15",
} as const;

export function UseCases() {
  return (
    <section id="casos-de-uso" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 2xl:max-w-[96rem] lg:px-8">
        <SectionHeading
          eyebrow="Casos de uso"
          title="Para quem precisa de controle sobre a operação."
          description="Do planejamento ao financeiro, o ecossistema se adapta às rotinas de cada área."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <StaggerItem key={useCase.title}>
                <article className="glass group h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
                  <span className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${accentStyle[useCase.accent]}`}>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{useCase.text}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
