import { FernIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT } from "@/constants";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-contact text-white"
    >
      <FernIcon
        strokeWidth={1.4}
        className="pointer-events-none absolute bottom-10 -left-[50px] h-auto w-[clamp(180px,18vw,260px)] rotate-24 text-lime opacity-18"
      />
      <div className="site-container relative flex flex-wrap gap-x-[clamp(32px,6vw,110px)] gap-y-14 py-section">
        <div className="min-w-0 flex-[1_1_380px]">
          <h2
            id="contact-title"
            className="text-[clamp(52px,7vw,112px)] leading-[0.92] font-bold tracking-[-0.05em] text-balance"
          >
            Poďme na to.
          </h2>
          <p className="mt-6 max-w-[420px] text-lg text-pretty text-contact-muted">
            Ozvite sa nám. Prídeme na obhliadku a pripravíme pracovný projekt
            podľa vašich predstáv.
          </p>
          <div className="mt-11 flex flex-col gap-[22px]">
            <div className="flex flex-col">
              <span className="text-sm text-placeholder">Telefón</span>
              <span className="text-[26px] font-semibold tracking-tight">
                {CONTACT.phone}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-placeholder">E-mail</span>
              <span className="text-[26px] font-semibold tracking-tight [overflow-wrap:anywhere]">
                {CONTACT.email}
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
