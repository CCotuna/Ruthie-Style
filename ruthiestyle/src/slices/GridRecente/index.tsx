import { Content } from "@prismicio/client";
import { PrismicImage, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GridRecente`.
 */
export type GridRecenteProps = SliceComponentProps<Content.GridRecenteSlice>;

/**
 * Component for "GridRecente" Slices.
 */
const GridRecente = ({ slice }: GridRecenteProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-8"
    >
      <div className="text-left md:text-center p-6 md:p-10 pb-0">
        <h5 className="font-bold text-md mb-2 uppercase text-red-500">
          <PrismicText field={slice.primary.eyebrow} />
        </h5>
        <h2 className="text-4xl font-bold uppercase text-brand-darkgreen">
          <PrismicText field={slice.primary.title} />
        </h2>
      </div>
      <div className="w-fit lg:w-full mx-auto gap-4 mt-5 md:gap-0 md:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center mb-5">
  {slice.primary.products.map((product, index) => (
    <div className="flex px-4 items-stretch" key={index}>
      <div className="block overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:z-20 relative">
        <PrismicImage
          field={product.image}
          className="w-full h-auto min-h-32 min-w-[24rem] max-h-96 object-cover"
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
          <span className="block opacity-75 -mb-1">
            <PrismicText field={product.product_category} />
          </span>
          <span className="block font-semibold text-lg">
            <PrismicText field={product.image_title} />
          </span>
          <div className="text-red-500 text-lg font-semibold">
            RON <PrismicText field={product.image_price} />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default GridRecente;
