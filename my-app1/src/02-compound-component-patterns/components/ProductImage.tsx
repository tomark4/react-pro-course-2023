import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  img?: string;
  className?: any;
  style?: React.CSSProperties | undefined;
}
export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  let imgToShow = "";

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      src={imgToShow}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
