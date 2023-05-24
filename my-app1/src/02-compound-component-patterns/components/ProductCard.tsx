import styles from "../styles/styles.module.css";
import {
  InitialValueI,
  OnChangeArgs,
  ProductContextPropsI,
  ProductI,
} from "../interfaces/interfaces";
import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks";

export const ProductContext = createContext({} as ProductContextPropsI);

const { Provider } = ProductContext;

export interface Props {
  product: ProductI;
  value?: number;
  className?: string;
  children?: ReactElement | ReactElement[];
  style?: React.CSSProperties | undefined;
  initialValues?: InitialValueI;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  initialValues,
  onChange,
}: Props) => {
  const { counter, increaseBy } = useProduct({
    product,
    value,
    onChange,
    initialValues,
  });

  return (
    <div className={`${styles.productCard} ${className}`} style={style}>
      <Provider value={{ counter, increaseBy, product }}>{children}</Provider>
    </div>
  );
};
