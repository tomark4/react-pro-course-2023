import styles from "../styles/styles.module.css";
import { ProductContextPropsI, ProductI } from "../interfaces/interfaces";
import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks";

export const ProductContext = createContext({} as ProductContextPropsI);

const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  product: ProductI;
  className?: string;
  style?: React.CSSProperties | undefined;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={`${styles.productCard} ${className}`} style={style}>
      <Provider value={{ counter, increaseBy, product }}>{children}</Provider>
    </div>
  );
};
