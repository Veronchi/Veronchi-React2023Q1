import { RefObject } from 'react';

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

export interface FormItem {
  id?: number;
  title: string;
  description: string;
  price: string;
  category: string;
  collection: string;
  forWhom: boolean;
  isFavorite: boolean;
  img: string;
}

export type FormPageProps = Record<string, never>;

export interface FormPageState {
  items: FormItem[];
}

export interface FormProps {
  addItem: (item: FormItem) => void;
}

export interface FormState {
  errors: Array<string>;
  // isSucceed: boolean;
}

export interface FormRefs {
  form: RefObject<HTMLFormElement>;
  title: RefObject<HTMLInputElement>;
  description: RefObject<HTMLTextAreaElement>;
  category: RefObject<HTMLSelectElement>;
  price: RefObject<HTMLInputElement>;
  collection: RefObject<HTMLInputElement>;
  forMen: RefObject<HTMLInputElement>;
  forWomen: RefObject<HTMLInputElement>;
  isFavorite: RefObject<HTMLInputElement>;
  img: RefObject<HTMLInputElement>;
}

export type InputState = Record<string, never>;

export interface InputProps {
  errors: Array<string>;
  forwardRef: RefObject<HTMLInputElement>;
}

export interface TextAreaProps {
  errors: Array<string>;
  forwardRef: RefObject<HTMLTextAreaElement>;
}

export interface SelectProps {
  forwardRef: RefObject<HTMLSelectElement>;
  errors: Array<string>;
}

export interface RadioProps {
  forwardRef: { forMen: RefObject<HTMLInputElement>; forWomen: RefObject<HTMLInputElement> };
  errors: Array<string>;
}

export type InputData = string;

export type RadioData = { men: boolean; women: boolean };

export type FileInput = FileList;
