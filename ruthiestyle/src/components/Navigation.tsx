"use client"
import type { ReactNode } from "react";
import clsx from "clsx";

import React, { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

export function Navigation({ navigation }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeParent, setActiveParent] = useState(null);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
        setActiveParent(null);
    }

    const toggleChildLinks = (index) => {
        if (activeParent === index) {
            setActiveParent(null);
        } else {
            setActiveParent(index);
        }
    };
    return (
        <>
            <button
                className="block lg:hidden font-medium text-slate-700"
                onClick={handleMenuClick}
            >
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect
                        y="20"
                        width="80"
                        height="10"
                        rx="10"
                        ry="10"
                        fill="#303f55"
                    ></rect>
                    <rect
                        y="40"
                        width="80"
                        height="10"
                        rx="5"
                        ry="5"
                        fill="#61728b"
                    ></rect>
                    <rect
                        y="60"
                        width="80"
                        height="10"
                        rx="15"
                        ry="5"
                        fill="#303f55"
                    ></rect>
                </svg>
            </button>

            <nav className="hidden lg:block">
                <ul className="flex flex-wrap gap-6 md:gap-10">
                    {navigation.data.slices.map((slice) => (
                        <li
                            key={prismic.asText(slice.primary.nav_item_title_label)}
                            className="font-medium text-black  uppercase relative group"
                        >
                            <PrismicNextLink
                                field={slice.primary.nav_item_title_link}
                                className="hover:text-yellow-500"
                            >
                                <PrismicText field={slice.primary.nav_item_title_label} />
                            </PrismicNextLink>
                            <PrismicText field={slice.items.length} />
                            {slice.primary.items.length > 0 && (
                                <ul className="absolute left-1/2 transform -translate-x-1/2 text-center text-white rounded hidden space-y-5 p-5 pt-8 bg-black shadow-lg  group-hover:block whitespace-nowrap">
                                    {slice.primary.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <PrismicNextLink
                                                field={item.child_link}
                                                className="hover:text-white"
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
            </nav>
            {isOpen && (
                <nav className="block lg:hidden w-full pt-4 pb-4">
                    <ul className="flex flex-col w-full">
                        {navigation.data.slices.map((slice, index) => (
                            <li
                                key={prismic.asText(slice.primary.nav_item_title_label)}
                                className="font-medium py-4 border-b border-black last:border-none last:pb-2 text-black relative"
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
