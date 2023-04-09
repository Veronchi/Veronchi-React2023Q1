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

export interface DataInterface {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | number;
  };
  results: Array<Character>;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: {
    name: string;
  };
  image: string;
  episode: Array<string>;
}

export interface FormItemInteface {
  title: string;
  description: string;
  price: string;
  category: string;
  collection: string;
  radio: string;
  stock: string;
  img: FileList;
}

export interface FormItemProps {
  title: string;
  description: string;
  price: string;
  category: string;
  collection: string;
  radio: string;
  stock: string;
  image: string;
}

export interface FormProps {
  addItem: (item: FormItemProps) => void;
}

export interface FormListProps {
  items: FormItemProps[];
}
