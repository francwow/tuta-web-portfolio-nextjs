import "./globals.css";
import type { Metadata } from "next";
import { inter, montserrat } from "../fonts/fonts";

export const metadata: Metadata = {
  title: "David Tuta",
  description:
    "Web portfolio de David Tuta. Fotografía profesional, contenidos audiovisuales y UFX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
