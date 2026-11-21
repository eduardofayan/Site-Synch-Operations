# Synch Operations | Site institucional

Landing page SaaS da **Synch Operations**, com o **Synch Insight** como produto principal e o **Synch Automation Hub** e o **AutoSynch Bot** como componentes do ecossistema. O objetivo da página é gerar leads e agendar demonstrações.

Slogan: _Transformando dados em decisões._

## Stack

- Next.js 15 (App Router) e React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (animações)
- Lucide Icons
- Fontes Inter e Outfit (via `next/font`). Trocar `Outfit` por a fonte oficial da marca quando disponível.

## Estrutura

```
src/
├── app/            # rotas (App Router): page, layout, metadata, robots, sitemap, OG image, API de leads
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # seções da home (Hero, Problem, Solution, Ecosystem, ...)
│   ├── forms/      # LeadForm
│   ├── ui/         # primitivos (Button, Reveal, SectionHeading, AnimatedBackground)
│   └── visuals/    # PipelineVisual (animação do hero)
├── hooks/          # useCountUp
├── lib/            # site.ts (conteúdo e configuração), metadata.ts (SEO), leads.ts (validação)
└── types/          # tipos compartilhados
```

Todo o texto do site fica em [src/lib/site.ts](src/lib/site.ts). Para alterar copy, métricas, casos de uso ou links, edite esse arquivo.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` (desenvolvimento) ou configure as variáveis no painel de hospedagem.

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sim | URL pública do site. Usada em metadata, OpenGraph, sitemap e JSON-LD. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Não | E-mail de contato exibido no rodapé e no JSON-LD. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Sim | Número com DDI e DDD, apenas dígitos (padrão: `5511952227447`). Usado no botão "Falar no WhatsApp". |
| `LEADS_API_URL` | Não | Endpoint externo que recebe os leads (POST JSON). Sem essa variável, o lead é validado e apenas registrado nos logs. |
| `LEADS_API_TOKEN` | Não | Token enviado como `Authorization: Bearer` para o `LEADS_API_URL`. |

Os valores padrão em `src/lib/site.ts` são **placeholders**. Substitua-os antes de publicar.

## Desenvolvimento

Requisitos: Node.js 20.9 ou superior.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build
npm start          # servidor de produção (usa a variável PORT, padrão 3000)
```

## Formulário e API de leads

- O formulário ([LeadForm.tsx](src/components/forms/LeadForm.tsx)) envia `POST /api/leads` com `nome`, `empresa`, `telefone`, `email` e `mensagem`.
- A validação está em [leads.ts](src/lib/leads.ts). O campo `website` é um honeypot: quando preenchido, a API responde com sucesso sem armazenar nada.
- Para integrar a um CRM, defina `LEADS_API_URL` (e `LEADS_API_TOKEN`, se necessário). A rota repassa o lead em JSON, com `source: "site-institucional"`.

## SEO

- Metadata completa em [metadata.ts](src/lib/metadata.ts): título, descrição, Open Graph, Twitter Card e `robots`.
- Dados estruturados (Schema.org `Organization`, `WebSite` e `SoftwareApplication`) em JSON-LD no layout.
- `robots.txt` ([robots.ts](src/app/robots.ts)) e `sitemap.xml` ([sitemap.ts](src/app/sitemap.ts)) são gerados automaticamente a partir de `NEXT_PUBLIC_SITE_URL`.
- Imagem Open Graph gerada em [opengraph-image.tsx](src/app/opengraph-image.tsx).

## Pendências antes de publicar

- Substituir os placeholders de URL, e-mail e WhatsApp.
- A seção "Logos de parceiros" exibe um marquee de segmentos, porque nenhum logo de cliente foi fornecido. Quando houver autorização para usar logos reais, troque o conteúdo de `segments` em `src/lib/site.ts` e o componente [PartnerLogos.tsx](src/components/sections/PartnerLogos.tsx).
- Revisar os números das métricas (`benefitMetrics`) com os dados reais da operação.

## Deploy na Hostinger

O formulário usa uma rota de API do Next.js, então o site precisa rodar como **aplicação Node.js**, não como site estático. Confirme no seu plano se a Hostinger oferece hospedagem de aplicações Node.js. Os nomes dos menus podem variar conforme a versão do painel.

1. **Gere o build localmente ou no servidor**
   ```bash
   npm ci
   npm run build
   ```
2. **Crie a aplicação Node.js no hPanel** (Websites > Add website > Node.js / aplicação Node.js). Selecione Node.js 20 ou superior.
3. **Envie o projeto** (via Git, pelo repositório conectado, ou por upload/SFTP). Não envie `node_modules` nem `.next` se for instalar no servidor.
4. **Configure o comando de build e de início:**
   - Instalação: `npm ci`
   - Build: `npm run build`
   - Início: `npm start`
5. **Defina as variáveis de ambiente** do painel com os valores da tabela acima.
6. **Aponte o domínio** para a aplicação e ative o SSL (HTTPS) no painel.
7. **Valide após o deploy:**
   - `https://seudominio.com.br/` carrega a home.
   - `https://seudominio.com.br/robots.txt` e `https://seudominio.com.br/sitemap.xml` retornam os arquivos.
   - Envie um lead de teste pelo formulário.
8. **Cadastre o sitemap** no Google Search Console.

Para atualizações, repita os passos 1, 3 e 4 (ou use o redeploy do painel).
