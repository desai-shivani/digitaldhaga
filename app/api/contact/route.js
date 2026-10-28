import { NextResponse } from "next/server";

// Receives the contact form. Right now it validates and logs the enquiry.
// To get it by email, connect a provider here (Resend, SendGrid, or SMTP via
// nodemailer) and send `lines` to your inbox. Keep keys in .env.local.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // honeypot: bots fill hidden fields, people do not
  if (body.website) return NextResponse.json({ ok: true });

  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().slice(0, 160);
  const message = String(body.message || "").trim().slice(0, 4000);

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Please check the form and try again." }, { status: 422 });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${String(body.phone || "").slice(0, 40)}`,
    `Company: ${String(body.company || "").slice(0, 120)}`,
    `Service: ${String(body.service || "").slice(0, 120)}`,
    `Budget: ${String(body.budget || "").slice(0, 60)}`,
    `Message: ${message}`,
  ];
  console.log("New enquiry\n" + lines.join("\n"));

  return NextResponse.json({ ok: true });
}
