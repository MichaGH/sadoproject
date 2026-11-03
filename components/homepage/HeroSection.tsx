import Image from "next/image";
import { UnderlineIcon } from "@/components/icons";
import { Navbar } from "@/components/layout/Navbar";
import { SERVICE_AREA } from "@/constants";
import { images } from "@/data/images";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative h-svh max-h-[1100px] min-h-[780px] overflow-hidden bg-deep-green text-white sm:min-h-[700px] lg:h-screen lg:min-h-[620px]"
    >
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,11,.55)_0%,rgba(6,20,11,.08)_20%,rgba(6,20,11,.2)_40%,rgba(6,20,11,.62)_65%,rgba(6,20,11,.85)_100%)]" />
      <Navbar />
      <div className="absolute inset-x-0 bottom-0">
        <div className="site-container flex flex-wrap items-end justify-between gap-x-12 gap-y-7 pb-[clamp(56px,7vw,96px)]">
          <div className="min-w-0 flex-[1_1_640px]">
            <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(6,20,11,.45)] py-2 pr-4 pl-3 text-xs font-medium tracking-[0.02em] text-white backdrop-blur-sm sm:text-sm">
              <span
                aria-hidden="true"
                className="h-[1.5px] w-7 shrink-0 bg-lime"
              />
              <span>{SERVICE_AREA}</span>
            </div>
            <h1
              id="hero-title"
              className="mt-[22px] max-w-[10em] text-[clamp(52px,8.4vw,136px)] leading-[0.92] font-bold tracking-[-0.05em] text-balance"
            >
              Záhrady, v ktorých sa{" "}
              <span className="relative inline-block">
                žije.
                <UnderlineIcon className="absolute -bottom-[0.14em] -left-[2%] h-[0.26em] w-[104%] overflow-visible text-lime" />
              </span>
            </h1>
          </div>
          <div className="flex flex-[0_1_380px] flex-col gap-[22px]">
            <p className="text-[17px] text-pretty text-hero-copy">
              Navrhujeme, budujeme a udržiavame záhrady — s jazierkami,
              skalkami, trávnikmi aj automatickou závlahou.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="#kontakt"
                className="rounded-full bg-lime px-[26px] py-4 font-semibold text-ink transition-colors hover:bg-lime-hover"
              >
                Dohodnúť obhliadku
              </a>
              <a
                href="#realizacie"
                className="rounded-full border border-white/35 bg-white/14 px-[26px] py-4 font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/26"
              >
                Realizácie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
