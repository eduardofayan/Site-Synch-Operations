import { NextResponse } from "next/server";
import { validateLead } from "@/lib/leads";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const result = validateLead(payload);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 422 });
  }

  // Honeypot preenchido: responde sucesso sem registrar nada.
  if (result.data.website) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  // Quando LEADS_API_URL estiver definida, o lead é encaminhado ao CRM/API externa.
  const forwardUrl = process.env.LEADS_API_URL;
  if (!forwardUrl) {
    // Sem dados pessoais nos logs: registra apenas a empresa do lead.
    console.info("[leads] novo lead recebido:", result.data.company);
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  try {
    const lead = { ...result.data };
    delete (lead as { website?: string }).website;
    const upstream = await fetch(forwardUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEADS_API_TOKEN
          ? { Authorization: `Bearer ${process.env.LEADS_API_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({ ...lead, source: "site-institucional" }),
      cache: "no-store",
    });

    if (!upstream.ok) throw new Error(`Upstream ${upstream.status}`);
  } catch {
    return NextResponse.json(
      { error: "Não foi possível registrar seu contato. Tente novamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
