import { useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  activeClass?: string;
  style?: React.CSSProperties | undefined;
  btnStyle?: React.CSSProperties | undefined;
}

export const ProductButtons = ({ className, style, btnStyle }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && maxCount === counter,
    [maxCount, counter]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
        style={btnStyle}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : ""
        }`}
        onClick={() => increaseBy(+1)}
        style={btnStyle}
        disabled={isMaxReached()}
      >
        +
      </button>
    </div>
  );
};
