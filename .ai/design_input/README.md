# SADO projekt — homepage (v7)

Open `index.html` in a browser (needs `support.js` + `image-slot.js` alongside).

## Notes for Next.js conversion
- All styling is inline. `style-hover="…"` attributes = hover states (convert to Tailwind `hover:` / CSS modules).
- Font: Geist (use `next/font` — `geist` package).
- Colors: ink #0E1A12, forest #1F5132, deep green #163A24, lime #C8E86B, muted text #4E5A52, white bg.
- `<image-slot src="…">` = image placeholder → replace with `next/image` (`fill`, `object-fit: cover`). Current images are Unsplash stock (credits in `credit` attr) — to be replaced with real project photos.
- Sections are marked with `data-screen-label` (Hero, Služby, Filmový pás, Realizácie, Proces, O nás, Kontakt, Footer) — good component boundaries.
- Botanical drawings and icons are inline SVG — extract into `components/icons`.
- `support.js` is a preview runtime only — not needed in Next.js.
- Outstanding: footer contact details marked "doplniť", service area to confirm.
