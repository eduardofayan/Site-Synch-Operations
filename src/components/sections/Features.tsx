import { Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insightFeatures, platforms } from "@/lib/site";

const insight = platforms.find((platform) => platform.id === "insight");

export function Features() {
  return (
    <section id="recursos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 2xl:max-w-[96rem] lg:px-8">
        <SectionHeading
          eyebrow="Recursos"
          title="Tudo o que a liderança precisa, em um só lugar."
          description="O Synch Insight reúne indicadores, análises e relatórios, com consultas em linguagem natural para quem não quer depender de planilhas."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="glass glow-border relative overflow-hidden rounded-3xl p-8 lg:col-span-2">
            <div aria-hidden="true" className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
              Produto principal
            </p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-foreground">Synch Insight</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{insight?.description}</p>
            <ul className="mt-8 space-y-3">
              {insight?.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {insightFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="glass group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary transition-shadow duration-500 group-hover:shadow-[0_0_30px_-6px_rgba(242,106,33,0.9)]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
