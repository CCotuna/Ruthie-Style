"use client"
import type { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

import clsx from "clsx";

import React, { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import Chatbot from "@/components/ChatBot";

export function Navigation({ navigation }: { navigation: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeParent, setActiveParent] = useState(null);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
        setActiveParent(null);
    }

    const toggleChildLinks = (index: React.SetStateAction<null>) => {
        if (activeParent === index) {
            setActiveParent(null);
        } else {
            setActiveParent(index);
        }
    };

    const openWhatsAppChat = () => {
        const phoneNumber = "+40746930853";
        const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
        window.open(url, "_blank");
    };
    return (
        <>
            <div className="flex space-x-5 items-center">
                <FaWhatsapp
                    className="block lg:hidden h-8 w-8 mt-2 text-brand-darkcyan cursor-pointer"
                    onClick={openWhatsAppChat}
                />
                <button
                    className="block lg:hidden font-medium text-brand-darkgreen cursor-pointer"
                    onClick={handleMenuClick}
                >
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect
                            y="20"
                            width="80"
                            height="10"
                            rx="10"
                            ry="10"
                            fill="#082D0F"
                        ></rect>
                        <rect
                            y="40"
                            width="80"
                            height="10"
                            rx="5"
                            ry="5"
                            fill="#0D9488"
                        ></rect>
                        <rect
                            y="60"
                            width="80"
                            height="10"
                            rx="15"
                            ry="5"
                            fill="#082D0F"
                        ></rect>
                    </svg>
                </button>
            </div>
            <nav className="hidden lg:flex lg:items-center">
                <ul className=" flex flex-wrap gap-6 md:gap-10">
                    {navigation.data.slices.map((slice: { primary: { nav_item_title_label: prismic.RichTextField | null | undefined; nav_item_title_link: prismic.LinkField | null | undefined; items: { child_link: prismic.LinkField | null | undefined; child_link_label: prismic.RichTextField | null | undefined; }[]; }; items: { length: prismic.RichTextField | null | undefined; }; }) => (
                        <li
                            key={prismic.asText(slice.primary.nav_item_title_label)}
                            className="font-medium text-brand-darkgreen  uppercase relative group"
                        >
                            <PrismicNextLink
                                field={slice.primary.nav_item_title_link}
                                className="hover:text-brand-darkcyan py-3 bg-text-brand-darkcyan"
                            >
                                <PrismicText field={slice.primary.nav_item_title_label} />
                            </PrismicNextLink>
                            <PrismicText field={slice.items.length} />
                            {slice.primary.items.length > 0 && (
                                <ul className="absolute transform -translate-x-1/2 text-white rounded-lg hidden p-5 pt-8 bg-brand-darkcyan shadow-lg group-hover:grid grid-cols-1 md:grid-cols-3 gap-2 whitespace-nowrap min-w-[36rem] max-w-[48rem]">
                                    {slice.primary.items.map((item: { child_link: prismic.LinkField | null | undefined; child_link_label: prismic.RichTextField | null | undefined; }, itemIndex: React.Key | null | undefined) => (
                                        <li key={itemIndex} className="mb-4">
                                            <PrismicNextLink
                                                field={item.child_link}
                                                className="hover:text-brand-darkgreen"
                                            >
                                                <PrismicText field={item.child_link_label} />
                                            </PrismicNextLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <span className=" ms-10"><Chatbot /></span>
            </nav>
            {isOpen && (
                <nav className="block lg:hidden w-full pt-4 pb-4">
                    <ul className="flex flex-col w-screen -ms-6 h-screen ">
                        {navigation.data.slices.map((slice: { primary: { nav_item_title_label: prismic.RichTextField | null | undefined; items: any[]; nav_item_title_link: prismic.EmptyLinkField<"Any"> | null | undefined; }; }, index: null) => (
                            <li
                                key={prismic.asText(slice.primary.nav_item_title_label)}
                                className="font-medium py-4 ms-5 border-b border-black last:border-none last:pb-2 text-black relative"
                            >
                                <div
                                    onClick={() => toggleChildLinks(index)}
                                    className="flex items-center justify-between cursor-pointer"
                                >
                                    {slice.primary.items.length == 0 && (
                                        <PrismicNextLink field={slice.primary.nav_item_title_link} onClick={handleMenuClick}>
                                            <PrismicText field={slice.primary.nav_item_title_label} />
                                        </PrismicNextLink>
                                    )}
                                    {slice.primary.items.length > 0 && (
                                        <PrismicText field={slice.primary.nav_item_title_label} />
                                    )}
                                    {slice.primary.items.length > 0 && (
                                        <svg
                                            className={`w-4 h-4 ml-2 transform ${activeParent === index ? "rotate-180" : ""
                                                }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 7.414l3.293 3.293a1 1 0 01-1.414 1.414l-2.586-2.586-2.586 2.586a1 1 0 01-1.414-1.414L10 7.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </div>

                                {/* Render child links only if this parent is active */}
                                {activeParent === index && slice.primary.items.length > 0 && (
                                    <ul className="ms-5 mt-4 space-y-4">
                                        {" "}
                                        <PrismicNextLink field={slice.primary.nav_item_title_link} onClick={handleMenuClick}>
                                            <PrismicText field={slice.primary.nav_item_title_label} />
                                        </PrismicNextLink>
                                        {slice.primary.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <PrismicNextLink field={item.child_link} onClick={handleMenuClick}>
                                                    <PrismicText field={item.child_link_label} />
                                                </PrismicNextLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
}
