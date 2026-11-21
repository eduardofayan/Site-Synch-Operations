import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const title = "Synch Operations | Synch Insight: Inteligência Operacional com IA";
const description =
  "Transforme dados dispersos em decisões operacionais. Synch Insight, Automation Hub e AutoSynch Bot unem BI, IA, automação e integração de sistemas. Solicite uma demonstração.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | Synch Operations",
  },
  description,
  applicationName: siteConfig.name,
  keywords: [
    "inteligência operacional",
    "business intelligence",
    "BI",
    "analytics",
    "automação de processos",
    "integração de sistemas",
    "IA corporativa",
    "monitoramento operacional",
    "Synch Insight",
    "Synch Automation Hub",
    "AutoSynch Bot",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      email: siteConfig.email,
      slogan: siteConfig.slogan,
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "sales",
        availableLanguage: ["Portuguese"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: siteConfig.language,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "Synch Insight",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Business Intelligence",
      operatingSystem: "Web",
      description:
        "Plataforma de inteligência operacional com dashboards, KPIs, analytics, relatórios e IA conversacional.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        description: "Sob consulta, mediante demonstração.",
      },
      provider: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};
