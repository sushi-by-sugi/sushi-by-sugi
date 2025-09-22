import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type SendEmailDto = {
  sender: Mail.Address;
  recipients: Mail.Address[];
  subject: string;
  message: string;
  html: Mail.Options["html"];
};

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
} as SMTPTransport.Options);

export const sendMail = async (dto: SendEmailDto) => {
  const { sender, recipients, subject, message, html } = dto;

  return await transporter.sendMail({
    from: sender,
    to: recipients,
    subject,
    html: html,
    text: message,
  });
};
