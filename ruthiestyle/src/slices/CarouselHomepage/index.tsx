"use client"
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/**
 * Props for `ImagesGrid`.
 */
export type ImagesGridProps = SliceComponentProps<Content.ImagesGridSlice>;

/**
 * Component for "ImagesGrid" Slices.
 */
const ImagesGrid = ({ slice }: ImagesGridProps): JSX.Element => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 md:px-44 pb-10"
    >
      <h5 className="text-md font-bold mb-2 flex max-w-96 uppercase text-red-500">
        <PrismicText field={slice.primary.eyebrow} />
      </h5>
      <h2 className="text-4xl font-bold mb-12 flex max-w-lg uppercase text-brand-darkgreen">
        <PrismicRichText field={slice.primary.title} />
      </h2>
      <div className="slider-container">
      <Slider {...sliderSettings}>
        {slice.primary.images.map((item, index) => (
          <div className="flex px-4 items-stretch" key={index}>
            <PrismicNextLink
            key={index}
            field={item.image_link_media}
            target="_blank"

            className="block overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:z-20 relative"
          >
            <PrismicNextImage
              field={item.image}
              className="w-full h-auto min-h-32 max-h-96 object-cover"
            />
            <div className="absolute top-0 right-0">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H50V50H25C11.1929 50 0 38.8071 0 25V0Z"
                  fill="#0D9488"
                />
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  transform="translate(14, 12)"
                  fill="white"
                />
              </svg>
            </div>
            <div className="p-4 text-center">
              <PrismicText field={item.image_title} />
              <div className="text-red-500 text-lg font-semibold">
                $<PrismicText field={item.image_description} />
              </div>
            </div>
          </PrismicNextLink>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
};

export default ImagesGrid;
