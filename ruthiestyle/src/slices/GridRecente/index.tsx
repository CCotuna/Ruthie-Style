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
      <div className="w-fit mx-auto gap-4 mt-5 md:gap-0 md:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center mb-5">
        {slice.primary.products.map((product, index) => (
          <div key={index} className="flex border p-2 me-4 rounded-lg">
            <div className="flex-shrink-0 md:m-6 relative overflow-hidden bg-brand-darkcyan rounded-lg max-w-xs shadow-lg transform transition duration-300 hover:scale-105 hover:z-20">
              <PrismicImage field={product.image} className="w-full" />
              <div className=" text-white px-6 pb-6 mt-6 flex flex-col">
                <span className="block opacity-75 -mb-1">
                  <PrismicText field={product.product_category} />
                </span>
                <span className="block font-semibold text-lg">
                  <PrismicText field={product.image_title} />
                </span>    
              </div>
              <span className="absolute bottom-0 right-0 m-4 bg-white rounded-lg text-orange-500 text-xs text-center font-bold px-3 py-2 leading-none items-center">
                  RON <PrismicText field={product.image_price} />
                </span>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridRecente;
