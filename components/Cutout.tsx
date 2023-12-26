"use client";

import { ImageListItem } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

type CutoutProps = {
  item: {
    url: string | null;
    fullUrl: string | null;
    title: string;
    rows: number;
    cols: number;
  };
};

const Cutout = ({ item }: CutoutProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ImageModal
        open={open}
        handleClose={() => setOpen(false)}
        imgUrl={item.fullUrl}
        title={item.title}
      />
      <ImageListItem
        className="hover:scale-105 transition-all"
        cols={item.cols}
        rows={item.rows}
        style={{ height: "auto", display: "flex", justifyContent: "center" }}
      >
        {item.url ? (
          <Image
            className="cursor-pointer "
            src={item.url}
            alt={item.title}
            style={{ objectFit: "contain" }}
            width={400 * item.cols}
            height={400 * item.rows}
            onClick={() => {
              setOpen(true);
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
