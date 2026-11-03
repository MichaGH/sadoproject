"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-0 flex-[1.2_1_440px] flex-col gap-3"
    >
      <div className="flex flex-wrap gap-3">
        <input
          required
          name="name"
          autoComplete="name"
          placeholder="Meno"
          aria-label="Meno"
          className="contact-field flex-[1_1_220px]"
        />
        <input
          required
          name="contact"
          placeholder="Telefón alebo e-mail"
          aria-label="Telefón alebo e-mail"
          className="contact-field flex-[1_1_220px]"
        />
      </div>
      <input
        name="town"
        autoComplete="address-level2"
        placeholder="Obec"
        aria-label="Obec"
        className="contact-field"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Čo plánujete? Nová záhrada, jazierko, trávnik, závlaha, údržba…"
        aria-label="Správa"
        className="contact-field resize-y"
      />
      <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3.5">
        <button
          type="submit"
          className="rounded-full bg-lime px-8 py-[18px] font-semibold text-ink transition-colors hover:bg-lime-hover"
        >
          Odoslať dopyt
        </button>
        <p role="status" className="text-[15px] text-contact-muted">
          {submitted
            ? "Ukážkový formulár — dopyt nebol odoslaný."
            : "Odpovedáme spravidla do pár dní."}
        </p>
      </div>
    </form>
  );
}
