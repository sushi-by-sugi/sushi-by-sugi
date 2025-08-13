"use client";

import React, { useState, FormEvent } from "react";
import PageLayout from "@/components/page-layout";

export default function ReserverenPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      serviceType: String(fd.get("serviceType") || ""),
      date: fd.get("date") ? String(fd.get("date")) : undefined,
      message: fd.get("message") ? String(fd.get("message")) : undefined,
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(
          typeof errBody?.message === "string"
            ? errBody.message
            : "Er is iets misgegaan bij het versturen. Probeer het later opnieuw.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Netwerkfout. Controleer je verbinding en probeer opnieuw.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageLayout
      imageSrc="/images/sushi-reservation.png"
      imageAlt="Sushi menu image"
      heading="Reserveren"
    >
      <div className="overflow-auto lg:h-full flex justify-center p-12 border-2 border-gray-400/50 rounded-2xl">
        <div className="flex flex-col gap-12 w-full max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl">
              Boek jouw sushi- <br /> beleving op maat
            </h1>
            <p className="font-light mt-4">
              Of je nu kiest voor een intiem diner aan huis, een creatieve
              workshop of een stijlvol feest: via dit formulier reserveer je
              eenvoudig jouw gewenste datum. Laat ons weten wat je zoekt — wij
              zorgen voor de rest.
            </p>
          </div>

          <form className="flex flex-col gap-2" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
                placeholder="Uw naam"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
                placeholder="Uw telefoonnummer"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
                placeholder="Uw e-mailadres"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <select
                id="serviceType"
                name="serviceType"
                required
                defaultValue=""
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
              >
                <option value="" disabled className="text-black">
                  Wat wil je reserveren?
                </option>
                <option value="private-dining" className="text-black">
                  Private Dining
                </option>
                <option value="workshop" className="text-black">
                  Workshop
                </option>
                <option value="catering" className="text-black">
                  Catering/Feest
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="date"
                id="date"
                name="date"
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
                placeholder="Gewenste datum"
              />
            </div>

            <div className="flex flex-col gap-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
                placeholder="Eventuele opmerkingen of wensen"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="p-3 rounded-lg bg-white text-black font-medium disabled:opacity-60 cursor-pointer"
            >
              {submitting ? "Verzenden..." : "Reserveren"}
            </button>

            <div aria-live="polite" className="min-h-6 text-sm">
              {status === "success" && (
                <span className="text-green-400">
                  Bedankt! Je aanvraag is verstuurd.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400">
                  {errorMsg ??
                    "Er is iets misgegaan bij het versturen. Probeer het later opnieuw."}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
