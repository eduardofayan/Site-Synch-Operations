import type { LeadInput, LeadValidation } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function asText(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function validateLead(payload: unknown): LeadValidation {
  if (!payload || typeof payload !== "object") {
    return { ok: false, error: "Dados inválidos." };
  }

  const raw = payload as Record<string, unknown>;
  const data: LeadInput = {
    name: asText(raw.name, 120),
    company: asText(raw.company, 160),
    phone: asText(raw.phone, 30),
    email: asText(raw.email, 160).toLowerCase(),
    message: asText(raw.message, 2000),
    website: asText(raw.website, 200),
  };

  // Campo honeypot: quando preenchido por bots, responde sucesso sem registrar o lead.
  if (data.website) {
    return { ok: true, data };
  }

  if (data.name.length < 2) return { ok: false, error: "Informe seu nome." };
  if (data.company.length < 2) return { ok: false, error: "Informe o nome da empresa." };
  if (!EMAIL_PATTERN.test(data.email)) return { ok: false, error: "Informe um e-mail válido." };

  const phoneDigits = data.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return { ok: false, error: "Informe um telefone válido com DDD." };
  }

  return { ok: true, data };
}
