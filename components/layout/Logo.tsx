import { SITE_NAME } from "@/constants";

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <a
      href="#"
      aria-label={`${SITE_NAME} — úvod`}
      className={`flex items-center gap-2.5 font-bold tracking-[-0.03em] text-white ${small ? "text-lg" : "text-xl"}`}
    >
      <span
        aria-hidden="true"
        className={`shrink-0 rounded-[0_50%_0_50%] bg-lime ${small ? "size-5" : "size-6"}`}
      />
      <span>
        SADO<span className="font-medium text-lime">projekt</span>
      </span>
    </a>
  );
}
