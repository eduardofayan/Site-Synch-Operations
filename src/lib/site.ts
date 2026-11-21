import {
  Activity,
  BarChart3,
  Bell,
  Bot,
  Brain,
  Cable,
  CheckCircle2,
  Database,
  Eye,
  Factory,
  FileSpreadsheet,
  Gauge,
  LayoutDashboard,
  LineChart,
  Mail,
  MessageSquare,
  Play,
  Plug,
  ScrollText,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Timer,
  Truck,
  TrendingUp,
  Wallet,
  Workflow,
  Zap,
  Boxes,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import type { Accent, ChatMessage, Metric, Platform } from "@/types";

export const siteConfig = {
  name: "Synch Operations",
  slogan: "Transformando dados em decisões.",
  description:
    "Plataforma de inteligência operacional que une analytics, BI, IA, automação de processos e integração de sistemas em um único ecossistema.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.synchoperations.com.br",
  locale: "pt_BR",
  language: "pt-BR",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@synchoperations.com.br",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511952227447",
  whatsappMessage: "Olá! Gostaria de agendar uma demonstração do Synch Insight.",
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Recursos", href: "#recursos" },
  { label: "IA", href: "#ia" },
  { label: "Casos de uso", href: "#casos-de-uso" },
];

export const heroFlow: { label: string; sub: string; icon: LucideIcon; accent: Accent }[] = [
  { label: "Sistemas", sub: "ERP, planilhas, APIs e e-mails", icon: Cable, accent: "accent" },
  { label: "AutoSynch Bot", sub: "Coleta, integração e ETL", icon: Bot, accent: "accent" },
  { label: "Automation Hub", sub: "Orquestração e governança", icon: Workflow, accent: "secondary" },
  { label: "Synch Insight", sub: "Dashboards e IA conversacional", icon: LayoutDashboard, accent: "primary" },
  { label: "Decisão", sub: "Ação rápida, com dados confiáveis", icon: Target, accent: "success" },
];

export const problemSources: { label: string; icon: LucideIcon; top: string; left: string; delay: number }[] = [
  { label: "ERP", icon: Database, top: "6%", left: "4%", delay: 0 },
  { label: "Excel", icon: FileSpreadsheet, top: "2%", left: "60%", delay: 0.6 },
  { label: "E-mails", icon: Mail, top: "42%", left: "74%", delay: 1.2 },
  { label: "APIs", icon: Plug, top: "70%", left: "6%", delay: 0.9 },
  { label: "Sistemas legados", icon: ServerCog, top: "76%", left: "52%", delay: 1.5 },
];

export const problemPoints = [
  "Relatórios montados à mão, toda semana, a partir do zero",
  "Cada sistema mostra uma versão diferente da mesma operação",
  "Decisões chegam tarde, quando o problema já virou prejuízo",
];

export const solutionSteps: { title: string; description: string; icon: LucideIcon; accent: Accent }[] = [
  {
    title: "Dados dispersos",
    description: "Informações espalhadas por ERPs, planilhas, bancos de dados e APIs.",
    icon: Boxes,
    accent: "accent",
  },
  {
    title: "Automação",
    description: "O AutoSynch Bot coleta, trata e integra os dados sem intervenção manual.",
    icon: Zap,
    accent: "primary",
  },
  {
    title: "Inteligência",
    description: "Indicadores, dashboards e IA transformam informação em contexto.",
    icon: Brain,
    accent: "secondary",
  },
  {
    title: "Resultado",
    description: "Visibilidade total da operação e decisões tomadas com segurança.",
    icon: TrendingUp,
    accent: "success",
  },
];

export const platforms: Platform[] = [
  {
    id: "insight",
    name: "Synch Insight",
    role: "Produto principal",
    description:
      "A plataforma de inteligência operacional. Dashboards, KPIs e relatórios executivos, com um agente de IA que responde perguntas em linguagem natural.",
    highlights: [
      "Dashboards e KPIs personalizados",
      "Analytics e Business Intelligence",
      "Agente de IA conversacional",
      "Relatórios gerenciais automáticos",
    ],
    icon: LayoutDashboard,
    accent: "primary",
    featured: true,
  },
  {
    id: "hub",
    name: "Synch Automation Hub",
    role: "Centro de controle",
    description:
      "O centro de comando de todas as automações. Orquestra filas, controla erros e governa o cadastro e a execução dos processos.",
    highlights: ["Orquestração", "Governança e auditoria", "Alertas e monitoramento", "Observabilidade"],
    icon: Workflow,
    accent: "secondary",
  },
  {
    id: "bot",
    name: "AutoSynch Bot",
    role: "Motor de execução",
    description:
      "O trabalhador digital. Executa automações, integra sistemas, processa dados e alimenta os ambientes analíticos de forma rastreável.",
    highlights: ["Integração de sistemas", "ETL e processamento de dados", "Coleta de informações", "Execução controlada"],
    icon: Bot,
    accent: "accent",
  },
];

export const operationalFlow: { title: string; text: string; platform: string; icon: LucideIcon; accent: Accent }[] = [
  { title: "Executar", text: "O AutoSynch Bot executa e integra os processos em cada sistema da operação.", platform: "AutoSynch Bot", icon: Play, accent: "accent" },
  { title: "Controlar", text: "O Automation Hub orquestra filas, governa acessos e dispara alertas.", platform: "Automation Hub", icon: SlidersHorizontal, accent: "secondary" },
  { title: "Analisar", text: "O Synch Insight consolida dados em dashboards e indicadores confiáveis.", platform: "Synch Insight", icon: BarChart3, accent: "primary" },
  { title: "Decidir", text: "Gestores agem com contexto, rapidez e evidência.", platform: "Sua equipe", icon: CheckCircle2, accent: "success" },
];

export const insightFeatures: { title: string; icon: LucideIcon }[] = [
  { title: "Dashboards executivos", icon: LayoutDashboard },
  { title: "KPIs operacionais", icon: Gauge },
  { title: "Analytics e BI", icon: LineChart },
  { title: "Relatórios gerenciais", icon: ScrollText },
  { title: "IA conversacional", icon: MessageSquare },
  { title: "Consultas em linguagem natural", icon: Sparkles },
  { title: "Monitoramento em tempo real", icon: Activity },
  { title: "Alertas automáticos", icon: Bell },
];

export const aiMessages: ChatMessage[] = [
  { role: "user", text: "Qual foi o faturamento do mês?" },
  { role: "assistant", text: "O faturamento acumulado foi de R$ 1.482.000,00." },
  { role: "user", text: "Existem pedidos atrasados?" },
  { role: "assistant", text: "Sim. Foram identificados 42 pedidos fora do prazo." },
];

export const aiSuggestions = [
  "Qual fornecedor possui mais ocorrências?",
  "Gere um resumo executivo.",
  "Qual foi o volume expedido na última semana?",
];

export const benefitMetrics: Metric[] = [
  { value: 90, prefix: "+", suffix: "%", label: "Redução de tempo operacional" },
  { value: 70, prefix: "+", suffix: "%", label: "Menos atividades manuais" },
  { value: 24, suffix: "/7", label: "Monitoramento automático" },
  { value: 100, suffix: "%", label: "Visibilidade operacional" },
];

export const benefits: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Decisões mais rápidas", text: "Informação consolidada e atualizada substitui horas de consulta manual.", icon: Timer },
  { title: "Uma única versão da verdade", text: "Todos os setores enxergam os mesmos indicadores, extraídos das mesmas fontes.", icon: Lightbulb },
  { title: "Governança e rastreabilidade", text: "Cada execução gera registros auditáveis, com alertas para falhas e desvios.", icon: ShieldCheck },
  { title: "Dados no seu ambiente", text: "Infraestrutura e dados permanecem sob o controle do cliente.", icon: Eye },
];

export const useCases: { title: string; text: string; icon: LucideIcon; accent: Accent }[] = [
  {
    title: "Planejamento e PCP",
    text: "Boletins personalizados, relatórios de S&OP e modelos de previsão alimentados automaticamente.",
    icon: Factory,
    accent: "primary",
  },
  {
    title: "Logística e recebimento",
    text: "Controle de recebimento por fornecedor, análise de apontamentos e endereçamentos em tempo real.",
    icon: Truck,
    accent: "secondary",
  },
  {
    title: "Produção e qualidade",
    text: "Indicadores de produção, ocorrências e desvios reunidos em um painel único para a liderança.",
    icon: Gauge,
    accent: "accent",
  },
  {
    title: "Financeiro e vendas",
    text: "Faturamento, pedidos atrasados e volume expedido respondidos com uma pergunta no chat.",
    icon: Wallet,
    accent: "success",
  },
];

export const segments = [
  "Indústria",
  "Logística",
  "PCP",
  "S&OP",
  "Distribuição",
  "Produção",
  "Supply chain",
];

export const ctaPoints = [
  "Demonstração personalizada com dados do seu cenário",
  "Sem substituir os sistemas que você já usa",
  "Implantação em etapas, com foco em ganho rápido",
];

export const footerColumns = [
  {
    title: "Ecossistema",
    links: [
      { label: "Synch Insight", href: "#recursos" },
      { label: "Automation Hub", href: "#ecossistema" },
      { label: "AutoSynch Bot", href: "#ecossistema" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Casos de uso", href: "#casos-de-uso" },
      { label: "Inteligência artificial", href: "#ia" },
      { label: "Solicitar demonstração", href: "#demo" },
    ],
  },
];
