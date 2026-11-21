import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PipelineVisual } from "@/components/visuals/PipelineVisual";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <Reveal>
            <a
              href="#recursos"
              className="glass group inline-flex items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5 text-xs font-medium text-muted transition hover:text-foreground"
            >
              <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-2.5 py-1 text-[11px] font-semibold text-white">
                <Sparkles size={12} aria-hidden="true" /> Novo
              </span>
              Synch Insight com IA conversacional para sua operação
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 text-4xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Transforme dados dispersos em{" "}
              <span className="text-gradient">decisões operacionais inteligentes.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Conecte sistemas, automatize processos e utilize inteligência artificial para acelerar seus resultados.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#demo">
                Solicitar Demonstração
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button href="#ecossistema" variant="ghost">
                Conheça o Ecossistema
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-10 text-sm text-muted">
              Synch Insight · Synch Automation Hub · AutoSynch Bot — um único ecossistema de inteligência operacional.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <PipelineVisual />
        </Reveal>
      </div>
    </section>
  );
}
