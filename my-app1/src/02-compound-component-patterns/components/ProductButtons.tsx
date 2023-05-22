import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  activeClass?: string;
  style?: React.CSSProperties | undefined;
  btnStyle?: React.CSSProperties | undefined;
}

export const ProductButtons = ({ className, style, btnStyle }: Props) => {
  const { counter, increaseBy } = useContext(ProductContext);

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
        className={styles.buttonAdd}
        onClick={() => increaseBy(+1)}
        style={btnStyle}
      >
        +
      </button>
    </div>
  );
};
