import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { platforms } from "@/lib/site";
import type { Accent, Platform } from "@/types";

const accentText: Record<Accent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  success: "text-success",
};

const accentIcon: Record<Accent, string> = {
  primary: "bg-primary/15 text-primary ring-primary/30",
  secondary: "bg-secondary/15 text-secondary ring-secondary/30",
  accent: "bg-accent/15 text-accent ring-accent/30",
  success: "bg-success/15 text-success ring-success/30",
};

const accentHover: Record<Accent, string> = {
  primary: "hover:shadow-[0_0_70px_-20px_rgba(242,106,33,0.9)] hover:border-primary/50",
  secondary: "hover:shadow-[0_0_70px_-20px_rgba(255,154,61,0.9)] hover:border-secondary/50",
  accent: "hover:shadow-[0_0_70px_-20px_rgba(217,72,15,0.9)] hover:border-accent/50",
  success: "hover:shadow-[0_0_70px_-20px_rgba(16,185,129,0.9)] hover:border-success/50",
};

function FeaturedCard({ platform }: { platform: Platform }) {
  const Icon = platform.icon;
  return (
    <div
      className={`group glass relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 sm:p-10 lg:col-span-3 ${accentHover[platform.accent]}`}
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/25 blur-[90px] transition-opacity duration-500 group-hover:opacity-100 opacity-70" />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-white">
            {platform.role}
          </span>
          <div className="mt-6 flex items-center gap-4">
            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${accentIcon[platform.accent]}`}>
              <Icon size={28} aria-hidden="true" />
            </span>
            <h3 className="text-3xl font-bold text-foreground sm:text-4xl">{platform.name}</h3>
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{platform.description}</p>
          <div className="mt-8">
            <Button href="#demo">
              Ver o Synch Insight em ação
              <ArrowUpRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {platform.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <Check size={18} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
              <span className="text-sm text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ComponentCard({ platform }: { platform: Platform }) {
  const Icon = platform.icon;
  return (
    <div
      className={`group glass relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 ${accentHover[platform.accent]}`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${accentIcon[platform.accent]}`}>
        <Icon size={24} aria-hidden="true" />
      </div>
      <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.18em] ${accentText[platform.accent]}`}>{platform.role}</p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{platform.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{platform.description}</p>
      <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
        {platform.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
            <span className={`h-1.5 w-1.5 rounded-full bg-current ${accentText[platform.accent]}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Ecosystem() {
  const [insight, ...components] = platforms;

  return (
    <section id="ecossistema" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="O ecossistema"
          title="Um produto para decidir. Dois motores para sustentar a operação."
          description="O Synch Insight é a plataforma que o seu time usa no dia a dia. O Automation Hub e o AutoSynch Bot garantem que os dados cheguem completos, atualizados e confiáveis."
        />

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          <StaggerItem className="lg:col-span-3">
            <FeaturedCard platform={insight} />
          </StaggerItem>
          {components.map((platform) => (
            <StaggerItem key={platform.id}>
              <ComponentCard platform={platform} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
