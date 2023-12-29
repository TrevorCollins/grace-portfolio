import { StaticImageData } from "next/image";

export interface ImageAsset {
  url: string;
  title: string;
  rows: number;
  cols: number;
  itemIndex?: number;
  png?: StaticImageData;
}
