import styles from "../styles/styles.module.css";

interface ProductTitleProps {
  title: string;
}

export const ProductTitle = ({ title }: ProductTitleProps) => {
  return <span className={styles.productDescription}>{title}</span>;
};
