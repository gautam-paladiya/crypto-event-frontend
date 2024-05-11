import type { Metadata } from "next";
import "./globals.css";
import { cn } from "../utils/cn";
import {
  FontPressStarter2P,
  FontRubik,
  FontRubikItalic,
} from "../utils/load-fonts";
import { seo } from "../assets/data/app-content.json";
import { AppProvider } from "../providers/app-provider";

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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="CryptoGetExpo" />
        <meta name="application-name" content="CryptoGetExpo" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <AppProvider>
        <body
          className={cn(
            FontPressStarter2P.variable,
            FontRubik.variable,
            FontRubikItalic.variable
          )}
        >
          <div className="overflow-x-hidden bg-black ">{children}</div>
        </body>
      </AppProvider>
    </html>
  );
}
