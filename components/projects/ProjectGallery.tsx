"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LeafIcon } from "@/components/icons";
import { projects } from "@/data/projects";

export function ProjectGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const selected = projects[selectedIndex];

  function openGallery(index: number) {
    setSelectedIndex(index);
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  function changePhoto(direction: number) {
    setSelectedIndex(
      (index) => (index + direction + projects.length) % projects.length,
    );
  }

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        setSelectedIndex(
          (index) => (index + direction + projects.length) % projects.length,
        );
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
        <div className="max-w-[640px]">
          <h2
            id="projects-title"
            className="flex items-center gap-[18px] text-section font-bold"
          >
            Realizácie
            <LeafIcon className="size-[0.6em] shrink-0 text-forest" />
          </h2>
          <p className="mt-[18px] text-lg text-pretty text-muted">
            Okrasné záhrady, kvetinové záhony, mobilné nádoby, skalky, jazierka
            aj trávnaté koberce.
          </p>
        </div>
        <button
          type="button"
          onClick={() => openGallery(0)}
          className="rounded-full border-[1.5px] border-ink px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Celá fotogaléria →
        </button>
      </div>
      <div className="mt-12 grid auto-rows-[clamp(200px,22vw,320px)] grid-cols-[repeat(auto-fit,minmax(min(280px,calc(50%_-_6px)),1fr))] gap-3">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => openGallery(index)}
            aria-label={`Otvoriť fotogalériu: ${project.title}`}
            className={`group relative block min-w-0 overflow-hidden rounded-[20px] bg-forest text-left ${index === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes={
                index === 0
                  ? "(max-width: 639px) 100vw, (max-width: 1199px) 66vw, 700px"
                  : "(max-width: 639px) 50vw, (max-width: 1199px) 33vw, 350px"
              }
              className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            />
            <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-white px-3.5 py-2 text-[15px] font-semibold text-ink">
              {project.title}
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        aria-labelledby="gallery-title"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="fixed inset-0 m-auto max-h-[95svh] w-[calc(100%-32px)] max-w-6xl overflow-auto rounded-3xl border border-white/20 bg-contact p-4 text-white backdrop:bg-black/85 sm:p-6"
      >
        {isOpen && (
          <>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 id="gallery-title" className="text-xl font-semibold">
                {selected.title}
              </h2>
              <button
                type="button"
                autoFocus
                onClick={() => dialogRef.current?.close()}
                aria-label="Zavrieť fotogalériu"
                className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-2xl text-white hover:bg-white/10"
              >
                ×
              </button>
            </div>
            <div className="relative h-[min(62svh,700px)]">
              <Image
                src={selected.image.src}
                alt={selected.image.alt}
                fill
                sizes="(max-width: 1152px) 95vw, 1100px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => changePhoto(-1)}
                aria-label="Predchádzajúca fotografia"
                className="flex size-11 items-center justify-center rounded-full border border-white/40 text-xl hover:bg-white/10"
              >
                ←
              </button>
              <p
                className="text-center text-sm text-contact-muted"
                aria-live="polite"
              >
                {selectedIndex + 1} / {projects.length}
                <br />
                <a
                  href={selected.image.creditUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-white"
                >
                  {selected.image.credit}
                </a>
              </p>
              <button
                type="button"
                onClick={() => changePhoto(1)}
                aria-label="Nasledujúca fotografia"
                className="flex size-11 items-center justify-center rounded-full border border-white/40 text-xl hover:bg-white/10"
              >
                →
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
