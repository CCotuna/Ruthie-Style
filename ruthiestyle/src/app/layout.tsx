import "./globals.css";
import React from "react";
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
        <Footer />
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
              <PrismicText field={settings.data.siteTitle} />
            </span>
          </PrismicNextLink>

          <Navigation navigation={navigation} />
        </div>
        <div className="hidden md:flex flex-wrap align-bottom items-center justify-end gap-x-6 gap-y-3 leading-none">
          <WhatsAppButton h={6} w={6} />
          {settings.data.socials.map((social, index) => (
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

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");
  console.log(navigation)
  return (

    <footer className="bg-brand-darkgreen text-white pt-5 pb-24 md:pt-0 md:pb-0">
      <Bounded yPadding="xs">
        <div className="flex flex-wrap gap-6 md:gap-10">
          <div className="w-full md:w-1/4">
            <PrismicNextImage
              field={settings.data.logowhite}
              fill={false}
              className="w-16 h-16"
            />
            <PrismicText field={settings.data.siteTitle} />
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="flex flex-col space-y-1">
              <span>
                <PrismicText field={settings.data.address} />
              </span>
              <span>
                <PrismicText field={settings.data.phone} />
              </span>
              <span>
                <PrismicText field={settings.data.email} />
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold">Navigation</h3>
            <div className=" grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-40">
              {navigation.data.slices.map((slice, sliceIndex) => (
                <React.Fragment key={sliceIndex}>
                  <div className="font-medium text-white md:whitespace-nowrap">
                    <PrismicNextLink
                      field={slice.primary.nav_item_title_link}
                      className="hover:text-brand-darkcyan "
                    >
                      <PrismicText field={slice.primary.nav_item_title_label} />
                    </PrismicNextLink>
                  </div>
                  {slice.primary.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="font-medium text-white md:whitespace-nowrap">
                      <PrismicNextLink
                        field={item.child_link}
                        className="hover:text-brand-darkcyan "
                      >
                        <PrismicText field={item.child_link_label} />
                      </PrismicNextLink>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/4 flex flex-col justify-between">
            <div className="flex items-center">
            <h3 className="text-lg font-bold me-5">Socials</h3>
            <div className="flex items-center space-x-2">
              {settings.data.socials.map((social, index) => (
                <PrismicNextLink
                  key={index}
                  field={social.link}
                >
                  {prismic.asText(social.link_label) == "Facebook" && (
                    <FaFacebook className="h-6 w-6 text-brand-darkcyan hover:text-brand-honeydew" />
                  )}
                  {prismic.asText(social.link_label) == "Instagram" && (
                    <FaInstagram className="h-6 w-6 text-brand-darkcyan hover:text-brand-honeydew" />
                  )}
                </PrismicNextLink>
              ))}
              <span className="mb-2 lg:mb-0">
              <WhatsAppButton h={6} w={6} isWhite={true} />
              </span>
            </div>
            </div>
            <div className="flex items-center">
              <PrismicNextLink
                field={settings.data.anpc_sal}
                target="_blank"
                rel="nofollow"
                className="inline-block"
              >
                <img
                  src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png"
                  alt="Solutionarea Alternativa a Litigiilor"
                  className="w-48 h-auto me-2 my-2"
                />
              </PrismicNextLink>
              <br />
              <PrismicNextLink
                field={settings.data.anpc_sol}
                target="_blank"
                rel="nofollow"
                className="inline-block"
              >
                <img
                  src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png"
                  alt="Solutionarea Online a Litigiilor"
                  className="w-48 h-auto mx-2 my-2"
                />
              </PrismicNextLink>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <hr className="border-gray-500 my-4" />
          <p className="text-sm text-gray-400">All rights reserved &copy; {new Date().getFullYear()} | Ruthie Style and Design - Handmade Accessories</p>
        </div>
      </Bounded>
    </footer>
  );
}