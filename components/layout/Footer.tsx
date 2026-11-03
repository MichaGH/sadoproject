import { navigation } from "@/data/navigation";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-footer-border bg-contact text-contact-muted">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-7 text-sm">
        <Logo small />
        <nav
          aria-label="Navigácia v pätičke"
          className="flex flex-wrap items-center gap-x-6 gap-y-1.5"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-contact-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            popoverTarget="privacy-note"
            className="text-contact-muted transition-colors hover:text-white"
          >
            Ochrana osobných údajov
          </button>
        </nav>
        <span>© 2026 SADOprojekt</span>
      </div>
      <div
        id="privacy-note"
        popover="auto"
        className="fixed inset-0 m-auto max-h-[80vh] w-[min(520px,calc(100%-40px))] overflow-auto rounded-3xl border border-line bg-white p-8 text-ink shadow-xl backdrop:bg-black/60"
      >
        <h2 className="text-2xl font-semibold tracking-tight">
          Ochrana osobných údajov
        </h2>
        <p className="mt-4 text-muted">
          Toto je dizajnový návrh webu. Kontaktný formulár údaje neodosiela ani
          neukladá. Informácie o spracúvaní osobných údajov budú doplnené pred
          spustením webu.
        </p>
        <button
          type="button"
          popoverTarget="privacy-note"
          popoverTargetAction="hide"
          className="mt-6 rounded-full bg-forest px-6 py-3 font-semibold text-white hover:bg-forest-hover"
        >
          Zavrieť
        </button>
      </div>
    </footer>
  );
}
