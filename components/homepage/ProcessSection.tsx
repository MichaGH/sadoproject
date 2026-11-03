import { processIcons } from "@/components/icons";
import { process } from "@/data/process";

export function ProcessSection() {
  return (
    <section
      id="postup"
      aria-labelledby="process-title"
      className="relative overflow-hidden bg-forest-hover text-white"
    >
      <div className="site-container py-section">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
          <h2 id="process-title" className="text-section font-bold">
            Ako to prebieha
          </h2>
          <p className="max-w-[380px] text-pretty text-contact-muted">
            Štyri kroky. Jeden tím od začiatku až do konca.
          </p>
        </div>
        <ol className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] border-t border-lime/28">
          {process.map((step, index) => {
            const Icon = processIcons[step.icon];
            return (
              <li
                key={step.title}
                className="border-r border-b border-lime/28 px-7 pt-8 pb-10"
              >
                <div className="flex items-end justify-between gap-4 text-lime">
                  <span className="text-7xl leading-none font-bold tracking-[-0.05em]">
                    {index + 1}
                  </span>
                  <Icon className="size-[76px]" />
                </div>
                <h3 className="mt-9 text-[22px] font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-pretty text-contact-muted">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
