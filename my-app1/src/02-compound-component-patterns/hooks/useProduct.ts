import { useEffect, useRef, useState } from "react";
import {
  InitialValueI,
  OnChangeArgs,
  ProductI,
} from "../interfaces/interfaces";

interface UseProductArgs {
  product: ProductI;
  value?: number;
  initialValues?: InitialValueI;
  onChange?: (args: OnChangeArgs) => void;
}

const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.qty || value);
  const isControlled = useRef(!!onChange);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (isMounted.current) return;

    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    if (isControlled && onChange) {
      return onChange({ qty: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, qty: newValue });
  };

  return { counter, increaseBy };
};

export default useProduct;
