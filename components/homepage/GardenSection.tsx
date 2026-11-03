import Image from "next/image";
import { images } from "@/data/images";

export function GardenSection() {
  return (
    <section
      aria-labelledby="garden-title"
      className="relative h-[clamp(520px,88vh,900px)] overflow-hidden bg-deep-green text-white"
    >
      <Image
        src={images.garden.src}
        alt={images.garden.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,34,19,.82)_0%,rgba(10,34,19,.45)_50%,rgba(10,34,19,.05)_100%)]" />
      <div className="absolute inset-0 flex items-center">
        <div className="site-container w-full">
          <h2
            id="garden-title"
            className="max-w-[9em] text-[clamp(44px,6.4vw,104px)] leading-[0.95] font-bold tracking-[-0.05em] text-balance"
          >
            Od prvého náčrtu po posledné kosenie.
          </h2>
          <p className="mt-7 max-w-[440px] text-lg text-pretty text-garden-copy">
            Celé okolie domu riešime ako jeden celok — aby záhrada fungovala aj
            o desať rokov.
          </p>
        </div>
      </div>
    </section>
  );
}
