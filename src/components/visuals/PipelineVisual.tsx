"use client";

import { motion } from "framer-motion";
import { heroFlow } from "@/lib/site";

export function PipelineVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/25 blur-3xl animate-glow-pulse" />

      <div className="glass glow-border relative rounded-3xl p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Fluxo operacional</span>
          <span className="flex items-center gap-2 text-xs font-medium text-success">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Disponível
          </span>
        </div>

        <ol className="flex flex-col">
          {heroFlow.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === heroFlow.length - 1;
            return (
              <li key={step.label} className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition-colors ${
                    isLast
                      ? "border-success/40 bg-success/10"
                      : "border-white/10 bg-white/[0.03] hover:border-secondary/40 hover:bg-white/[0.06]"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      isLast ? "bg-success/20 text-success" : "bg-primary/15 text-secondary"
                    }`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{step.label}</p>
                    <p className="text-sm break-words text-muted">{step.sub}</p>
                  </div>
                </motion.div>

                {!isLast ? (
                  <div className="ml-[2.1rem] flex h-8 w-0.5 overflow-hidden rounded-full bg-white/10">
                    <motion.span
                      className="block h-1/2 w-full bg-gradient-to-b from-transparent via-secondary to-transparent"
                      animate={{ y: ["-100%", "220%"] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                    />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
