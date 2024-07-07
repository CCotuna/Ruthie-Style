import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicImage, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroHomepage`.
 */
export type HeroHomepageProps = SliceComponentProps<Content.HeroHomepageSlice>;

/**
 * Component for "HeroHomepage" Slices.
 */
const HeroHomepage = ({ slice }: HeroHomepageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-12 mt-20 md:mt-10 md:pt-20 text-left"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
          <div className="md:col-span-7 p-3">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none mb-4 max-w-2xl mx-auto">
              <PrismicText field={slice.primary.title} />
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-500 mb-6 md:mb-8 max-w-xl">
              <PrismicText field={slice.primary.subtitle} />
            </p>
            <PrismicNextLink
              field={slice.primary.contact}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              <PrismicText field={slice.primary.contact_label} />
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </PrismicNextLink>
          </div>
          <div className="md:col-span-5 mt-10 md:mt-12">
            <PrismicImage field={slice.primary.image} className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomepage;
