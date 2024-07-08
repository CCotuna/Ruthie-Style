import "./globals.css";
import { FaPhone } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { Inter } from "next/font/google";
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview, PrismicNextImage } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { Navigation } from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";

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
        <CallButton />
        <ScrollTopButton />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");
  
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <Bounded as="header" yPadding="xs">
        <div className="flex flex-wrap align-bottom items-center justify-between gap-x-6 gap-y-3 leading-none">
          <PrismicNextLink
            href="/"
            className="flex items-center gap-x-4 text-brand-darkgreen text-xl font-semibold tracking-tight"
          >
            {prismic.isFilled.image(settings.data.logo) && (
              <PrismicNextImage
                field={settings.data.logo}
                fill={false}
                className="w-16 h-16"
              />
            )}
          <span className="hidden md:block">
          <PrismicText field={settings.data.siteTitle}/>
          </span>
          </PrismicNextLink>
            
          <Navigation navigation={navigation} />
        </div>
        <div className="hidden md:flex flex-wrap align-bottom items-center justify-end gap-x-6 gap-y-3 leading-none">
        <WhatsAppButton h={6} w={6}/>
          { settings.data.socials.map((social, index) => (
            <PrismicNextLink
              key={index}
              field={social.link}
            >
              {prismic.asText(social.link_label) == "Facebook" && (
                <FaFacebook className="h-6 w-6 text-brand-darkcyan hover:text-brand-darkgreen" />
              )}
              {prismic.asText(social.link_label) == "Instagram" && (
                <FaInstagram className="h-6 w-6 text-brand-darkcyan hover:text-brand-darkgreen" />
              )}
            </PrismicNextLink>
          ))}
        </div>
      </Bounded>
    </div>
  );
}


function CallButton() {
  return (
    <a
      href="tel:0774324923"
      className="fixed bottom-4 left-4 z-50 bg-brand-darkcyan text-white rounded-full p-4 shadow-lg hover:bg-brand-darkgreen hover:text-brand-honeydew transition-colors duration-300"
      aria-label="Call us"
    >
            <FaPhone className="h-6 w-6" />
    </a>
  );
}