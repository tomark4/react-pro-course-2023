import styles from "../styles/styles.module.css";
import {
  InitialValueI,
  OnChangeArgs,
  ProductCardHandler,
  ProductContextPropsI,
  ProductI,
} from "../interfaces/interfaces";
import { createContext } from "react";
import { useProduct } from "../hooks";

export const ProductContext = createContext({} as ProductContextPropsI);

const { Provider } = ProductContext;

export interface Props {
  product: ProductI;
  value?: number;
  className?: string;
  style?: React.CSSProperties | undefined;
  initialValues?: InitialValueI;
  children?: (args: ProductCardHandler) => JSX.Element;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductCard = ({
  product,
  className,
  style,
  value,
  initialValues,
  children,
  onChange,
}: Props) => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
    product,
    value,
    onChange,
    initialValues,
  });

  const maxCount = initialValues?.maxCount || 0;

  return (
    <div className={`${styles.productCard} ${className}`} style={style}>
      <Provider value={{ counter, increaseBy, product, maxCount }}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset,
          })}
      </Provider>
    </div>
  );
};
