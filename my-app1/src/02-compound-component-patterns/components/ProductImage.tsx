import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  return (
    <img
      src={img ? img : noImage}
      alt="Product"
      className={styles.productImg}
    />
  );
};
