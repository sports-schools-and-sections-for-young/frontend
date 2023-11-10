export interface IBarItemProps {
  barChunk: {
    range: number;
    prices: number[];
  };
  currentPrice: number;
  maxHeight: number;
}
