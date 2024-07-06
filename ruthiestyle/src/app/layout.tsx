import "./globals.css";

import { Inter } from "next/font/google";
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview, PrismicNextImage } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

import * as prismic from "@prismicio/client";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <Bounded as="header" yPadding="xs">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
          <PrismicNextLink
            href="/"
            className="flex items-center gap-x-4 text-slate-800 text-xl font-semibold tracking-tight"
          >
            {prismic.isFilled.image(settings.data.logo) && (
              <PrismicNextImage
                field={settings.data.logo}
                fill={false}
                className="w-16 h-16"
              />
            )}
            <PrismicText field={settings.data.siteTitle} />
          </PrismicNextLink>

          {/* <Navigation navigation={navigation} /> */}
        </div>
      </Bounded>
    </div>
  );
}
