"use client";

import { useState } from "react";
import { imageArr } from "../public/assets/images";
import Cutout from "./Cutout";
import GLightbox from "./GLightbox";

export type LightboxPropTypes = {
  open: boolean;
  index: number;
};

const Gallery = () => {
  const [lightboxProps, setLightboxProps] = useState<LightboxPropTypes>({
    open: false,
    index: 0,
  });

  return (
    <>
      <ul className="grid list-none w-full overflow-visible grid-cols-12 grid-rows-2">
        {imageArr.map((item, index) => {
          return (
            <Cutout
              key={`${item.url}-${index}`}
              item={item}
              index={index}
              setLightboxProps={setLightboxProps}
            />
          );
        })}
      </ul>
      <GLightbox {...lightboxProps} setLightboxProps={setLightboxProps} />
    </>
  );
};

export default Gallery;
