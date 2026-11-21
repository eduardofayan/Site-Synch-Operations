import type { LucideIcon } from "lucide-react";

export type Accent = "primary" | "secondary" | "accent" | "success";

export interface Platform {
  id: "insight" | "hub" | "bot" | "cash";
  name: string;
  role: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  accent: Accent;
  featured?: boolean;
}

export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export interface LeadInput {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  website?: string;
}

export type LeadValidation =
  | { ok: true; data: LeadInput }
  | { ok: false; error: string };
