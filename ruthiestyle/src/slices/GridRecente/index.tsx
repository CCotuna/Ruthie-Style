import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for grid_recente (variation: {slice.variation})
      Slices
    </section>
  );
};

export default GridRecente;
