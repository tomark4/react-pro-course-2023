import styles from "../styles/styles.module.css";
import { ProductContextPropsI, ProductI } from "../interfaces/interfaces";
import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks";

export const ProductContext = createContext({} as ProductContextPropsI);

const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  product: ProductI;
  className?: any;
}

export const ProductCard = ({ children, product, className }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={`${styles.productCard} ${className}`}>
      <Provider value={{ counter, increaseBy, product }}>{children}</Provider>
    </div>
  );
};
