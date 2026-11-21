import { ArrowRight } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionSteps } from "@/lib/site";

const glowByAccent = {
  primary: "group-hover:shadow-[0_0_50px_-12px_rgba(242,106,33,0.8)] text-primary bg-primary/15",
  secondary: "group-hover:shadow-[0_0_50px_-12px_rgba(255,154,61,0.8)] text-secondary bg-secondary/15",
  accent: "group-hover:shadow-[0_0_50px_-12px_rgba(217,72,15,0.8)] text-accent bg-accent/15",
  success: "group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.8)] text-success bg-success/15",
} as const;

export function Solution() {
  return (
    <section id="solucao" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 2xl:max-w-[96rem] lg:px-8">
        <SectionHeading
          eyebrow="A solução"
          title="Da informação dispersa ao resultado, em um fluxo contínuo."
          description="A Synch Operations capta, trata e integra os dados automaticamente, para que a liderança decida com base em evidências."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {solutionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title} className="relative">
                <div className={`group glass relative h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 ${glowByAccent[step.accent]}`}>
                  <div className="mb-6 flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${glowByAccent[step.accent].split(" ").slice(-2).join(" ")}`}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-semibold text-muted/70">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
                {index < solutionSteps.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    size={20}
                    className="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 text-secondary/60 lg:block"
                  />
                ) : null}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
