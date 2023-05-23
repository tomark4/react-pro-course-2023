import { useState } from "react";
import { OnChangeArgs, ProductInCartI } from "../interfaces/interfaces";

const useShoppingCartPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCartI;
  }>({});

  const onProductCountChange = ({ product, qty }: OnChangeArgs) => {
    // NEW CODE
    setShoppingCart((prevState) => {
      const productInCart = prevState[product.id] || { ...product, qty: 0 };
      if (Math.max(productInCart.qty + qty, 0) > 0) {
        productInCart.qty += qty;
        return { ...prevState, [product.id]: productInCart };
      }

      const { [product.id]: toDelete, ...rest } = prevState;
      return rest;
    });
    // OLD CODE
    // if (qty === 0) {
    //   const { [product.id]: toDelete, ...rest } = shoppingCart;
    //   setShoppingCart(rest);
    // } else {
    //   setShoppingCart((prevState) => ({
    //     ...prevState,
    //     [product.id]: { ...product, qty },
    //   }));
    // }
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};

export default useShoppingCartPage;
