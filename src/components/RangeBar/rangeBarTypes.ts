export interface IRangeBarProps {
  id?: number;
  currentPrice: number;
  prices: number[];
  setCurrentPrice: (price: number) => void;
}
