import { Props as ProductCardPropsI } from "../components/ProductCard";
import { Props as ProductTitlePropsI } from "../components/ProductTitle";
import { Props as ProductImagePropsI } from "../components/ProductImage";
import { Props as ProductButtonsPropsI } from "../components/ProductButtons";

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
  (Props: ProductCardPropsI): JSX.Element;
  Title: (Props: ProductTitlePropsI) => JSX.Element;
  Image: (Props: ProductImagePropsI) => JSX.Element;
  Buttons: (Props: ProductButtonsPropsI) => JSX.Element;
}

export interface OnChangeArgs {
  product: ProductI;
  qty: number;
}
