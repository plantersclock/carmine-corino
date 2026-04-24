import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@cornerstoneplanninggroup.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

type InquiryType = "advisors" | "general";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  inquiryType: InquiryType;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message, inquiryType } = body;

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const fullName = `${firstName} ${lastName}`.trim();
  const label = inquiryType === "general" ? "General" : "Advisors";
  const subject = `New ${label} inquiry from ${fullName}`;

  const html = `
    <h2>New ${escapeHtml(label)} inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Inquiry Type:</strong> ${escapeHtml(label)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const text = [
    `New ${label} inquiry`,
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Inquiry Type: ${label}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: `Carmine Corino <${FROM_EMAIL}>`,
    to: [TO_EMAIL],
    replyTo: email,
    subject,
    html,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
