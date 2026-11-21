"use client";

import { useCountUp } from "@/hooks/useCountUp";
import type { Metric } from "@/types";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefitMetrics, benefits } from "@/lib/site";

function CountMetric({ metric }: { metric: Metric }) {
  const { ref, value } = useCountUp<HTMLParagraphElement>(metric.value);

  return (
    <div className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1">
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-success/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
      />
      <p ref={ref} className="font-display relative text-5xl font-semibold tracking-tight text-gradient tabular-nums lg:text-6xl">
        {metric.prefix ?? ""}
        {value}
        {metric.suffix ?? ""}
      </p>
      <p className="relative mt-4 text-sm leading-relaxed text-muted">{metric.label}</p>
    </div>
  );
}

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Benefícios"
          title="Resultados que aparecem nos indicadores."
          description="Ganhos medidos em operações que deixaram de depender de tarefas manuais e de consultas em múltiplas fontes."
        />

        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefitMetrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <CountMetric metric={metric} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mt-6 grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <div className="flex h-full gap-5 rounded-3xl border border-white/5 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.text}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal className="mt-12 text-center text-xs text-muted/70">
          Indicadores ilustrativos. Os resultados variam conforme a maturidade e o escopo de cada operação.
        </Reveal>
      </div>
    </section>
  );
}
