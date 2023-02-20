import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param { TextProps }
 */
const Text = ({ slice }) => (
  <section>
    {console.log(slice)}
    <div>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </div>
  </section>
);

export default Text;
