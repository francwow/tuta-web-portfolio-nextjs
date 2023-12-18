import "./globals.css";
import type { Metadata } from "next";
import { inter, montserrat } from "../fonts/fonts";
import Provider from "@/components/Provider";
import localFont from "next/font/local";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

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
    <html className={`${materialSymbols.variable}`} lang="en">
      <Provider>
        <body className={`${inter.variable} ${montserrat.variable}`}>
          {children}
          <GoogleAnalytics />
        </body>
      </Provider>
    </html>
  );
}
