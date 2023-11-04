import { Inter, Montserrat } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "300", "400", "600", "800"],
  variable: "--font-inter",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "600", "800"],
  variable: "--font-montserrat",
});
