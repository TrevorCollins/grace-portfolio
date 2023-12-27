import { imageArr } from "@/public/assets/images";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { LightboxPropTypes } from "./Gallery";
import Image from "next/image";

type Props = {
  index: number;
  open: boolean;
  setLightboxProps: (props: LightboxPropTypes) => void;
};
const GLightbox = ({ index, open, setLightboxProps }: Props) => {
  const filteredArr = imageArr
    .filter((item) => item.title !== "blank")
    .map((item) => {
      return {
        src: item.fullUrl,
        alt: item.title,
      };
    });
  return (
    <SlideshowLightbox
      open={open}
      startingSlideIndex={index}
      showThumbnails={false}
      disableImageZoom
      className="hidden"
      onClose={() => setLightboxProps({ open: false, index: 0 })}
      framework="nextjs"
      images={filteredArr}
      lightboxIdentifier="lightbox-1"
    >
      {filteredArr.map((item) => (
        <Image
          key={`lightbox-item-${index}`}
          data-lightboxjs="lightbox-1"
          src={item.src}
          alt={item.alt}
          width={520}
          height={840}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk2A8AAMUAwUPJ2C4AAAAASUVORK5CYII="
          style={{ objectFit: "contain" }}
        />
      ))}
    </SlideshowLightbox>
  );
};

export default GLightbox;
