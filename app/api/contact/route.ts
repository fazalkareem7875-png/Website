import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";
    const service =
      typeof body?.service === "string" ? body.service.trim() : "";

    if (!name || !phone || message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Please fill in name, phone and a short message." },
        { status: 400 }
      );
    }

    if (phone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    // No email delivery configured (per project scope) — log server-side only.
    console.log("[contact]", {
      name,
      phone,
      service,
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 500 }
    );
  }
}
