# SADOprojekt

A responsive Next.js homepage converted from the Claude Design export in `.ai/design_input`. The original Slovak copy, SVG artwork, photography, colours, fluid typography, and desktop composition are retained.

## Run locally

```sh
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```sh
npm run lint
npm run build
npm start
```

## Structure

```text
app/
  page.tsx                 Homepage section composition
  layout.tsx               Slovak metadata and Geist through next/font
  globals.css              Brand tokens, fluid sizing, shared utilities
  icon.svg                 Brand favicon
components/
  homepage/*Section.tsx    Individual homepage sections
  layout/                  Navbar, Logo, Footer
  icons/                   Original SVG illustrations and icons
  projects/                Interactive photo gallery
  contact/                 Demo contact form
constants/index.ts         Site name, service area, contact placeholders
data/                     Navigation, services, process, references, images, projects
public/images/             Locally stored original stock photographs
.ai/                       Supplied design and structure notes
```

The page and sections are Server Components. Only the gallery and contact form use Client Components. Styling uses Tailwind CSS v4 directly in components, with shared brand tokens, the page container, and form fields in `app/globals.css`. Fluid measurements are kept where they determine the original composition; regular spacing uses the Tailwind scale.

## Proposal behaviour

- Navigation and service cards link to homepage sections, so the proposal has no links to unfinished subpages.
- Gallery tiles and the gallery button open a photo viewer with previous/next controls, arrow-key navigation, and Escape to close.
- The form validates required fields in the browser and shows an explicit demo notice after submission. It does not send or store enquiries and has no backend.
- The privacy link opens a notice explaining the proposal's current behaviour.
- Phone and email are intentionally the original placeholders. Replace them in `constants/index.ts` when the client supplies confirmed details; then add the appropriate telephone/email links.
- Stock images are the same ones used in the export. Their original source URLs and photographer credits are recorded in `data/images.ts`; replace them with client photographs before launch. The supplied service area also needs client confirmation.

The export's preview-only scripts are retained in `.ai/design_input` and are not loaded by the application. ESLint excludes that original export.

## Validation

The conversion was checked with ESLint, TypeScript, a production build, and Chromium browser checks at 320, 375, 390, 768, 1024, 1440, and 1920 pixels. Browser checks covered horizontal overflow, navigation targets, button colours, the gallery, keyboard controls, privacy notice, form validation, and browser errors. The desktop layout was also compared visually with the original export.
