import styles from "../styles/styles.module.css";

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductButtons = ({
  counter,
  increaseBy,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
