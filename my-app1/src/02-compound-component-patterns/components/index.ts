import { ProductCard as ProductCardComponent } from "./ProductCard";
import { ProductTitle, ProductImage, ProductButtons } from "./";
import { ProductCardI } from "../interfaces/interfaces";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

export const ProductCard: ProductCardI = Object.assign(ProductCardComponent, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
