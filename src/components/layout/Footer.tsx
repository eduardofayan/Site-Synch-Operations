import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { footerColumns, siteConfig, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 2xl:max-w-[96rem] px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <a href="#topo" className="inline-flex rounded-lg bg-white px-3 py-2">
            <Image src="/brand/logo.png" alt="Synch Operations" width={1156} height={408} className="h-8 w-auto" />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Inteligência operacional que une analytics, IA, automação e integração de sistemas.
          </p>
          <p className="mt-6 text-sm font-medium text-secondary">{siteConfig.slogan}</p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail size={16} aria-hidden="true" /> {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp comercial
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col 2xl:max-w-[96rem] gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Synch Operations. Todos os direitos reservados.</p>
          <p>Synch Insight · Synch Automation Hub · AutoSynch Bot</p>
        </div>
      </div>
    </footer>
  );
}
