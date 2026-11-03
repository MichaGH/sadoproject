import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SADOprojekt — Záhrady, v ktorých sa žije.",
  description:
    "Navrhujeme, budujeme a udržiavame záhrady — s jazierkami, skalkami, trávnikmi aj automatickou závlahou. Piešťany, Partizánske, Vrbové a okolie.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sk" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
