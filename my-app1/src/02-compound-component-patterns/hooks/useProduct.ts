import { useState } from "react";
import { OnChangeArgs, ProductI } from "../interfaces/interfaces";

interface UseProductArgs {
  product: ProductI;
  onChange?: (args: OnChangeArgs) => void;
}

const useProduct = ({ product, onChange }: UseProductArgs) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, qty: newValue });
  };

  return { counter, increaseBy };
};

export default useProduct;
