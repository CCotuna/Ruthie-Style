import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

type TextProps = SliceComponentProps<Content.TextSlice>;

const Text = ({ slice }: TextProps) => {
  return (
    <Bounded as="section" className="bg-white leading-relaxed">
      <div
        className={clsx(
          slice.variation === "twoColumns" && "md:columns-2 md:gap-6",
        )}
      >
        <PrismicRichText field={slice.primary.text} />
        {/* 
        Page Under Construction
        We apologize for the inconvenience, but this page is currently under construction. We are working hard to bring you new and exciting content, and we appreciate your patience during this time.
        Our team is diligently crafting this page to ensure a great user experience. Please check back soon for updates.
        Stay tuned! This page will be available shortly.
        Thank you for your understanding and support. If you have any questions or need assistance, please feel free to contact us.
        Thank you for your patience!
        */}
      </div>
    </Bounded>
  );
};

export default Text;
