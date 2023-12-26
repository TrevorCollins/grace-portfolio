"use client";

import { imageArr } from "../public/assets/images";
import Cutout from "./Cutout";

const Gallery = () => {
  return (
    <ul className="grid list-none w-full px-8 overflow-visible md:grid-cols-12 grid-rows-2">
      {imageArr.map((item, index) => {
        return (
          <>
            <Cutout key={`${item.url}-${index}`} item={item} />
          </>
        );
      })}
    </ul>
  );
};

export default Gallery;
