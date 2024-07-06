import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";


/**
 * Props for `ImagesGrid`.
 */
export type ImagesGridProps = SliceComponentProps<Content.ImagesGridSlice>;

/**
 * Component for "ImagesGrid" Slices.
 */
const ImagesGrid = ({ slice }: ImagesGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 md:px-40 pb-10"
    >
      <h5 className="text-md font-bold mb-2 flex max-w-96 uppercase">
        <PrismicText field={slice.primary.eyebrow} />
      </h5>
      <h2 className="text-4xl font-bold mb-12 flex max-w-lg uppercase">
        <PrismicRichText field={slice.primary.title} />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {slice.primary.images.map((item, index) => (
          <PrismicNextLink
            key={index}
            field={item.image_link_media}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <PrismicNextImage
              field={item.image}
              className="w-full h-auto object-cover"
            />
            {/* <div className="p-4">
              <PrismicText field={item.image_title} />
              <PrismicText field={item.image_description} />
            </div> */}
          </PrismicNextLink>
        ))}
      </div>
    </section>
  );
};

export default ImagesGrid;
