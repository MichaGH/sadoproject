import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { references } from "@/data/references";

export function ProjectsSection() {
  return (
    <section
      id="realizacie"
      aria-labelledby="projects-title"
      className="bg-white"
    >
      <div className="site-container py-section">
        <ProjectGallery />
        <div className="mt-[clamp(72px,8vw,110px)]">
          <h3 className="text-[15px] font-semibold text-forest">
            Pracovali sme napríklad pre
          </h3>
          <ul className="mt-[18px] grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-x-8">
            {references.map((reference) => (
              <li
                key={reference.name}
                className="border-t border-line py-[18px]"
              >
                <p className="text-[21px] font-semibold tracking-tight">
                  {reference.name}
                </p>
                <p className="text-muted">{reference.location}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted">
            …a mnoho ďalších rodinných domov, predzáhradiek a chát.
          </p>
        </div>
      </div>
    </section>
  );
}
