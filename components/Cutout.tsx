"use client";

import { ImageListItem } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";
import GLightbox from "./GLightbox";
import { LightboxPropTypes } from "./Gallery";
import { ImageAsset } from "@/types/ImageAsset";

type CutoutProps = {
  item: ImageAsset;
  index: number;
  setLightboxProps: (props: LightboxPropTypes) => void;
};

const Cutout = ({ setLightboxProps, index, item }: CutoutProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <ImageModal
        open={open}
        handleClose={() => setOpen(false)}
        imgUrl={item.fullUrl}
        title={item.title}
      /> */}
      <ImageListItem
        className="hover:scale-105 transition-all"
        cols={item.cols}
        rows={item.rows}
        style={{ height: "auto", display: "flex", justifyContent: "center" }}
      >
        {item.png ? (
          <Image
            className="cursor-pointer"
            loading="lazy"
            src={item.png}
            alt={item.title}
            style={{ objectFit: "contain" }}
            onClick={() => {
              setLightboxProps({ open: true, index: item.itemIndex || 0 });
            }}
          />
        ) : (
          <Image
            className="cursor-none"
            src={`https://placehold.co/${400 * item.cols}x${
              400 * item.rows
            }/black/black/png?text=/n`}
            alt={item.title}
            style={{ objectFit: "contain" }}
            width={400 * item.cols}
            height={400 * item.rows}
          />
        )}
      </ImageListItem>
    </>
  );
};

export default Cutout;
