// types/index.tsx
export enum PreloaderSize {
  Small = "25px",
  Medium = "50px",
  Large = "100px",
}

export interface PreloaderProps {
  size?: PreloaderSize;
  className?: string;
}
