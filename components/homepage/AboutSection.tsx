import Image from "next/image";
import { BotanicalIcon } from "@/components/icons";
import { images } from "@/data/images";

export function AboutSection() {
  return (
    <section
      id="o-nas"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-sage"
    >
      <BotanicalIcon
        strokeWidth={1.6}
        className="pointer-events-none absolute -top-10 -right-[60px] h-auto w-[clamp(200px,22vw,320px)] rotate-200 text-forest opacity-16"
      />
      <div className="site-container relative flex flex-wrap items-center gap-x-[clamp(32px,6vw,110px)] gap-y-10 py-section">
        <div className="relative aspect-4/5 max-h-[760px] min-w-0 flex-[1_1_460px] overflow-hidden rounded-3xl bg-image-placeholder">
          <Image
            src={images.about.src}
            alt={images.about.alt}
            fill
            sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 650px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-[1_1_440px]">
          <h2 id="about-title" className="text-section font-bold">
            O nás
          </h2>
          <p className="mt-7 max-w-[560px] text-[clamp(20px,1.8vw,26px)] leading-[1.35] font-medium tracking-[-0.015em] text-pretty">
            Staráme sa o celé okolie domu — od prvého návrhu až po pravidelné
            kosenie.
          </p>
          <p className="mt-[18px] max-w-[540px] text-pretty text-muted">
            Všetky práce robíme na vysokej profesionálnej úrovni. Naši
            pracovníci majú odborné vzdelanie, kvalifikáciu a dlhoročné
            skúsenosti z praxe. Fotky z nášho archívu vám radi ukážeme aj pri
            osobnom stretnutí.
          </p>
          <a
            href="#postup"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3.5 font-semibold text-white transition-colors hover:bg-forest-hover"
          >
            Viac o nás →
          </a>
        </div>
      </div>
    </section>
  );
}
