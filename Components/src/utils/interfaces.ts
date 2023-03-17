export type SearchProps = Record<string, never>;

export interface SearchValue {
  value: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  oldPrice: number | undefined;
  newPrice: number;
  rating: string;
  isLiked: boolean;
  img: string;
}
