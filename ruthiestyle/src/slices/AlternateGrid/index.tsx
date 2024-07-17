import { PrismicNextImage } from "@prismicio/next";
import { type Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type AlternateGridProps = SliceComponentProps<Content.AlternateGridSlice>;

const AlternateGrid = ({ slice }: AlternateGridProps): JSX.Element => {
  const isImageRight = slice.variation === "imageRight";
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative  pb-10 bg-white text-gray-800"
    >
      <div
        className={`
          grid gap-6 auto-cols-fr
          ${isFilled.image(slice.primary.image) ? "md:grid-cols-2" : ""}
        `}
      >
        {isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            field={slice.primary.image}
            className={`
               max-w-full md:max-w-2xl self-center md:ms-10 md:max-h-[27rem] rounded-lg
              ${isImageRight ? "order-2 md:order-2" : "order-1 md:order-1"}
            `}
          />
        )}
        <div className={`p-5 md:p-0 grid gap-8 ${isImageRight ? "order-1 md:order-1" : "order-2 md:order-2"}`}>
          <div className="grid gap-2">
            {isFilled.keyText(slice.primary.eyebrowHeadline) && (
              <p className="text-brand-darkcyan text-lg font-medium m-0 uppercase">
                {slice.primary.eyebrowHeadline}
              </p>
            )}
            {isFilled.richText(slice.primary.title) && (
              <div className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-[2.75rem] m-0 text-brand-darkgreen">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}
            {isFilled.richText(slice.primary.description) && (
              <div className="text-lg max-w-4xl md:text-xl xl:text-[1.4rem] m-0">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
          </div>
          {slice.primary.items.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2">
              {slice.primary.items.map((item, i) => (
                <div key={`item-${i + 1}`} className="grid">
                  {isFilled.richText(item.title) && (
                    <div className="font-bold text-[1.17rem] mt-0 mb-2 text-brand-darkgreen">
                      <PrismicRichText field={item.title} />
                    </div>
                  )}
                  {isFilled.richText(item.description) && (
                    <div className="text-sm mt-0">
                      <PrismicRichText field={item.description} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AlternateGrid;
