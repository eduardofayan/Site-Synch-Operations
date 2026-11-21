"use client";

import { motion, useInView } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { useRef } from "react";
import { aiMessages, aiSuggestions } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AIAssistant() {
  const chatRef = useRef<HTMLDivElement>(null);
  const inView = useInView(chatRef, { once: true, margin: "-120px" });

  return (
    <section id="ia" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="IA corporativa"
            title="Pergunte ao seu negócio, em linguagem natural."
            description="O agente do Synch Insight responde com base nos dados já integrados pelo AutoSynch Bot. Nada de exportar planilhas ou montar relatórios para cada dúvida."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {aiSuggestions.map((suggestion) => (
              <span
                key={suggestion}
                className="glass rounded-full px-4 py-2 text-xs font-medium text-muted"
              >
                {suggestion}
              </span>
            ))}
          </div>
        </div>

        <div ref={chatRef} className="glass glow-border relative overflow-hidden rounded-3xl">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Sparkles size={18} aria-hidden="true" className="text-white" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Synch Insight IA</p>
                <p className="flex items-center gap-1.5 text-xs text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                  Conectado às suas fontes
                </p>
              </div>
            </div>
          </div>

          <div className="flex min-h-[320px] flex-col gap-4 p-6">
            {aiMessages.map((message, index) => {
              const isUser = message.role === "user";
              return (
                <motion.div
                  key={`${message.role}-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    isUser
                      ? "self-end rounded-br-sm bg-primary/20 text-foreground"
                      : "self-start rounded-bl-sm border border-secondary/20 bg-white/5 text-foreground/90"
                  }`}
                >
                  {!isUser ? (
                    <span className="mb-1 block text-[10px] font-semibold tracking-[0.18em] text-secondary uppercase">
                      Synch Insight
                    </span>
                  ) : null}
                  {message.text}
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 px-6 py-4">
            <span className="flex-1 truncate rounded-full bg-white/5 px-4 py-2.5 text-sm text-muted">
              Pergunte algo sobre sua operação...
            </span>
            <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <Send size={16} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
