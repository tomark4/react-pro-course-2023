import styles from "../styles/styles.module.css";
import {
  ProductCardPropsI,
  ProductContextPropsI,
} from "../interfaces/interfaces";
import { createContext } from "react";
import { useProduct } from "../hooks";

export const ProductContext = createContext({} as ProductContextPropsI);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardPropsI) => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <Provider value={{ counter, increaseBy, product }}>{children}</Provider>
    </div>
  );
};
