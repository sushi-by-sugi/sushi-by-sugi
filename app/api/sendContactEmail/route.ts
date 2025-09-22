export const runtime = "nodejs";

import { getEmailHtml } from "@/components/email/EmailTemplate";
import { sendMail } from "@/lib/mail";

export async function POST(req: Request) {
  const { name, email, phone, message, date, serviceType } = await req.json();

  const emailTemplate = await getEmailHtml({
    name,
    email,
    phone,
    message,
    date,
    serviceType,
  });

  try {
    await sendMail({
      sender: email,
      recipients: [
        {
          name: "Sushi by Sugi",
          address: "contact@sushibysugi.nl",
        },
      ],
      subject: "Nieuwe inzending van het reserveringsformulier",
      message: `New message from (${email})\n\nMessage: ${message}`,
      html: emailTemplate,
    });
    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
