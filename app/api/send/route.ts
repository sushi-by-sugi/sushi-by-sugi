import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";

export const runtime = "nodejs";

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  date?: string;
  serviceType?: string;
};

function json(resBody: unknown, status = 200) {
  return new Response(JSON.stringify(resBody), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ error: 'Content-Type must be "application/json"' }, 415);
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return json({ error: "Malformed JSON body" }, 400);
  }

  const { name, phone, email, message, date, serviceType } = body || {};

  if (!email) {
    return json({ error: 'Missing or invalid field "email"' }, 400);
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Sushi By Sugi <contact@sushibysugi.nl>",
      to: ["fortb2302@gmail.com"],
      subject: "Reservering aangevraagd",
      react: EmailTemplate({
        name: name ?? "John Doe",
        phone: phone ?? "+00 000000000",
        email: email ?? "placeholder@example.com",
        message,
        date,
        serviceType,
      }),
    });

    if (error) {
      return json({ error: error.message || "Failed to send email" }, 400);
    }

    return json({ ok: true, data }, 200);
  } catch (err) {
    console.error("Unexpected error in /api/send:", err);
    const message =
      process.env.NODE_ENV === "development"
        ? err instanceof Error
          ? err.message
          : String(err)
        : "Unexpected server error";
    return json({ error: message }, 500);
  }
}
