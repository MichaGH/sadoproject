import { BotanicalIcon } from "@/components/icons";

export function IntroSection() {
  return (
    <section
      aria-label="Kompletné záhradnícke služby"
      className="site-container flex flex-wrap items-end justify-between gap-x-16 gap-y-8 pt-[clamp(88px,11vw,160px)] pb-[clamp(48px,6vw,80px)]"
    >
      <p className="min-w-0 max-w-[1100px] flex-[1_1_640px] text-[clamp(30px,3.8vw,58px)] leading-[1.08] font-semibold tracking-[-0.035em] text-pretty">
        Kompletné služby v oblasti záhradníctva.{" "}
        <span className="text-subtle">
          Od návrhu cez realizáciu až po pravidelnú údržbu — všetko z jednej
          ruky.
        </span>
      </p>
      <BotanicalIcon className="h-auto w-[clamp(110px,13vw,190px)] shrink-0 text-forest max-sm:ml-auto" />
    </section>
  );
}
