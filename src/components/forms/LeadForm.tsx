"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { LeadInput } from "@/types";

type Status = "idle" | "submitting" | "success" | "error";

const emptyForm: LeadInput = { name: "", company: "", phone: "", email: "", message: "", website: "" };

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition focus:border-secondary/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-secondary/20";

export function LeadForm() {
  const [form, setForm] = useState<LeadInput>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  function update(field: keyof LeadInput) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((current) => ({ ...current, [field]: event.target.value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const body = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(body.error ?? "Não foi possível enviar. Tente novamente.");
        return;
      }

      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
      setFeedback("Falha de conexão. Verifique sua internet e tente novamente.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center" role="status">
        <CheckCircle2 size={48} className="text-success" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-foreground">Recebemos seu contato</h3>
        <p className="max-w-sm text-sm text-muted">
          Nossa equipe entrará em contato em breve para agendar a demonstração do Synch Insight.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass glow-border grid grid-cols-1 gap-4 rounded-3xl p-6 sm:grid-cols-2 sm:p-8" noValidate>
      <div>
        <label htmlFor="lead-name" className="mb-2 block text-xs font-medium text-muted">
          Nome
        </label>
        <input id="lead-name" name="name" autoComplete="name" required value={form.name} onChange={update("name")} className={fieldClass} placeholder="Seu nome" />
      </div>
      <div>
        <label htmlFor="lead-company" className="mb-2 block text-xs font-medium text-muted">
          Empresa
        </label>
        <input id="lead-company" name="company" autoComplete="organization" required value={form.company} onChange={update("company")} className={fieldClass} placeholder="Nome da empresa" />
      </div>
      <div>
        <label htmlFor="lead-phone" className="mb-2 block text-xs font-medium text-muted">
          Telefone
        </label>
        <input id="lead-phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={update("phone")} className={fieldClass} placeholder="(11) 99999-9999" />
      </div>
      <div>
        <label htmlFor="lead-email" className="mb-2 block text-xs font-medium text-muted">
          E-mail
        </label>
        <input id="lead-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update("email")} className={fieldClass} placeholder="voce@empresa.com.br" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="lead-message" className="mb-2 block text-xs font-medium text-muted">
          Mensagem
        </label>
        <textarea id="lead-message" name="message" rows={4} value={form.message} onChange={update("message")} className={`${fieldClass} resize-none`} placeholder="Conte um pouco sobre sua operação e o que gostaria de resolver." />
      </div>

      {/* Honeypot: campo oculto para bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="lead-website">Site</label>
        <input id="lead-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} />
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p role="alert" className="min-h-5 text-sm text-red-400">
          {status === "error" ? feedback : ""}
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(242,106,33,0.8)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : null}
          {status === "submitting" ? "Enviando..." : "Agendar Demonstração"}
        </button>
      </div>
    </form>
  );
}
