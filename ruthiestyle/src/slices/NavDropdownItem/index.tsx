import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NavDropdownItem`.
 */
export type NavDropdownItemProps =
  SliceComponentProps<Content.NavDropdownItemSlice>;

/**
 * Component for "NavDropdownItem" Slices.
 */
const NavDropdownItem = ({ slice }: NavDropdownItemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav_dropdown_item (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NavDropdownItem;
