export type SearchProps = Record<string, never>;

export interface SearchValue {
  value: string;
}

export interface CardState {
  isLiked: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  oldPrice: string | undefined;
  newPrice: string;
  rating: string;
  isLiked: boolean;
  img: string;
}
