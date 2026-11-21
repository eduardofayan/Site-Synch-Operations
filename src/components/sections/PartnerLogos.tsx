import { segments } from "@/lib/site";

export function PartnerLogos() {
  const loop = [...segments, ...segments];

  return (
    <section aria-label="Segmentos atendidos" className="relative border-y border-white/5 bg-white/[0.02] py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Feito para operações industriais, logísticas e de planejamento
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 pr-4">
          {loop.map((segment, index) => (
            <span
              key={`${segment}-${index}`}
              className="glass whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-medium text-muted"
            >
              {segment}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
