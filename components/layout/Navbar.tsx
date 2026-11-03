import { navigation } from "@/data/navigation";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-3.5 py-[22px]">
        <Logo />
        <nav
          aria-label="Hlavná navigácia"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] font-medium sm:gap-x-8"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white transition-colors hover:text-lime"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full border-[1.5px] border-white/70 px-5 py-[11px] text-white transition-colors hover:bg-white hover:text-ink"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
