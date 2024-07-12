import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicImage, PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
/**
 * Props for `GridProducts`.
 */
export type GridProductsProps = SliceComponentProps<Content.GridProductsSlice>;

/**
 * Component for "GridProducts" Slices.
 */
const GridProducts = ({ slice }: GridProductsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-8"
    >
      <div className="text-left md:text-center p-6 md:p-10 pb-0">
      <h4 className="text-lg font-bold tracking-tight text-red-500 mt-4">
          <PrismicText field={slice.primary.subtitle} />
        </h4>
        <h2 className="text-4xl font-bold uppercase text-brand-darkgreen">
          <PrismicText field={slice.primary.title} />
        </h2>
        <h5 className="text-sm font-bold tracking-tight text-gray-900 mt-2">
          <PrismicText field={slice.primary.call_to_action} />
        </h5>
      </div>
      <div className="w-fit mx-auto gap-4 mt-5 md:gap-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center mb-5">
        {slice.primary.products.map((product, index) => (
          <div key={index} className="flex border p-2 me-4 rounded-lg">
            <div className="flex-shrink-0 md:m-6 relative overflow-hidden bg-brand-darkcyan rounded-lg max-w-xs shadow-lg transform transition duration-300 hover:scale-105 hover:z-20">
              <PrismicNextLink field={product.image_link}>
              <PrismicImage field={product.image} className="w-full" />
              </PrismicNextLink>
              <div className="text-white px-6 pb-6 mt-6 flex flex-col">
                <span className="block opacity-75 -mb-1">
                  <PrismicText field={product.product_category} />
                </span>
                <span className="block font-semibold text-lg">
                  <PrismicText field={product.product_name} />
                </span>    
              </div>
              <span className="absolute bottom-0 right-0 m-4 bg-white rounded-lg text-orange-500 text-xs text-center font-bold px-3 py-2 leading-none items-center">
                RON <PrismicText field={product.product_price} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridProducts;
