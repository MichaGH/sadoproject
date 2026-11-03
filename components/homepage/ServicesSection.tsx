import { FernIcon, serviceIcons } from "@/components/icons";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section
      id="sluzby"
      aria-label="Naše služby"
      className="site-container pb-section"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-x-8">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.icon];
          return (
            <a
              key={service.id}
              href="#kontakt"
              className="block border-t-[1.5px] border-ink pt-[26px] pb-9 text-ink transition-colors hover:text-forest"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="size-11 text-forest" />
              </span>
              <h2 className="mt-5 text-service font-semibold">
                {service.title}
              </h2>
              <p className="mt-2.5 text-muted">{service.description}</p>
            </a>
          );
        })}
        <a
          href="#kontakt"
          className="relative mb-8 flex flex-col justify-between gap-5 overflow-hidden rounded-b-[18px] border-t-[1.5px] border-forest bg-forest px-[26px] pt-[26px] pb-[30px] text-white transition-colors hover:bg-forest-hover"
        >
          <span className="text-service font-semibold">
            Neviete, čo presne potrebujete? Poradíme vám na mieste.
          </span>
          <span className="font-semibold text-lime">Dohodnúť obhliadku →</span>
          <FernIcon className="pointer-events-none absolute -right-[30px] -bottom-[70px] h-auto w-[150px] -rotate-18 text-lime opacity-35" />
        </a>
      </div>
    </section>
  );
}
