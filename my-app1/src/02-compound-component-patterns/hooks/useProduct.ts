import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, ProductI } from "../interfaces/interfaces";

interface UseProductArgs {
  product: ProductI;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}

const useProduct = ({ product, onChange, value = 0 }: UseProductArgs) => {
  const [counter, setCounter] = useState(0);
  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    if (isControlled) {
      return onChange!({ qty: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, qty: newValue });
  };

  return { counter, increaseBy };
};

export default useProduct;
