import { CheckCircle2, MessageCircle } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ctaPoints, whatsappHref } from "@/lib/site";

export function CTA() {
  return (
    <section id="demo" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 2xl:max-w-[96rem] lg:px-8">
        <div className="glass glow-border relative overflow-hidden rounded-[2.5rem] p-6 sm:p-10 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40 blur-3xl"
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
                Próximo passo
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Pronto para transformar sua operação?
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                Agende uma demonstração do Synch Insight com um especialista e veja como seus dados podem virar decisões.
              </p>

              <ul className="mt-8 space-y-3">
                {ctaPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="#demo-form">Agendar Demonstração</Button>
                <Button href={whatsappHref} external variant="ghost">
                  <MessageCircle size={18} aria-hidden="true" />
                  Falar no WhatsApp
                </Button>
              </div>
            </Reveal>

            <div id="demo-form" className="scroll-mt-28">
              <Reveal delay={0.1}>
                <LeadForm />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
