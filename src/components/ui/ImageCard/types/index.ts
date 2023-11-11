import { ImgHTMLAttributes } from "react";

export enum ImageCardSize {
  SLIDER_HEADER_IMG = "slider-header-image",
  SEARCH_IMG = "search-page-image",
  SLIDER_IMG = "slider-image",
  REASON_IMG = "reason-image",
  MAIN_IMG = "main-image",
  WHY_WE_IMG = "why-we-image",
}

export interface ImageCardProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  size: ImageCardSize;
  src: string;
  alt: string;
}
