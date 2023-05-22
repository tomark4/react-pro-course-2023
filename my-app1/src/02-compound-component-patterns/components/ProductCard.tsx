import styles from "../styles/styles.module.css";
import { ReactElement } from "react";
import { ProductImage, ProductTitle, ProductButtons } from "./";

interface ProductI {
  id: string;
  title: string;
  img?: string;
}

interface Props {
  product: ProductI;
  children?: ReactElement | ReactElement[];
}

const ProductCard = ({ product, children }: Props) => {
  return <div className={styles.productCard}>{children}</div>;
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

export default ProductCard;
