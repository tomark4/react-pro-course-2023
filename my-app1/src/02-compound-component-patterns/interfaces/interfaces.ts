import { ReactElement } from "react";

export interface ProductCardPropsI {
  children?: ReactElement | ReactElement[];
  product: ProductI;
}

export interface ProductI {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextPropsI {
  counter: number;
  product: ProductI;
  increaseBy: (value: number) => void;
}

export interface ProductCardI {
  ({ children, product }: ProductCardPropsI): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
