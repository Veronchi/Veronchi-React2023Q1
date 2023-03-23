import { forwardRef, RefObject } from 'react';

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
  collection: string;
  forWhom: string;
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
  isValid: boolean;
  isSucceed: boolean;
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
  forwardRef: RefObject<HTMLInputElement>;
}

export interface TextAreaProps {
  forwardRef: RefObject<HTMLTextAreaElement>;
}

export interface SelectProps {
  forwardRef: RefObject<HTMLSelectElement>;
}

export interface RadioProps {
  forwardRef: { forMen: RefObject<HTMLInputElement>; forWomen: RefObject<HTMLInputElement> };
}
