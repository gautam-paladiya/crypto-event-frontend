import type { Metadata } from "next";
import "./globals.css";
import { cn } from "../utils/cn";
import {
  FontPressStarter2P,
  FontRubik,
  FontRubikItalic,
} from "../utils/load-fonts";
import { seo } from "../assets/data/app-content.json";

export const metadata: Metadata = {
  ...seo.pages.home,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={cn(
          FontPressStarter2P.variable,
          FontRubik.variable,
          FontRubikItalic.variable
        )}
      >
        <div className="overflow-x-hidden bg-black ">{children}</div>
      </body>
    </html>
  );
}
