import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { OnChangeArgs, ProductI } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const products: ProductI[] = [
  { id: "1", title: "Coffe mug card 1", img: "coffee-mug.png" },
  { id: "2", title: "Coffe mug card 2", img: "coffee-mug2.png" },
];

interface ProductInCartI extends ProductI {
  qty: number;
}

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCartI;
  }>({});

  const onProductCountChange = ({ product, qty }: OnChangeArgs) => {
    if (qty === 0) {
      const { [product.id]: toDelete, ...rest } = shoppingCart;
      setShoppingCart(rest);
    } else {
      setShoppingCart((prevState) => ({
        ...prevState,
        [product.id]: { ...product, qty },
      }));
    }
  };

  return (
    <div>
      <h1>My Ultra Uff Shoping store</h1>
      <hr />
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            key={key}
          >
            <ProductImage className="custom-image" img={product.img} />
            <ProductTitle
              className="text-white text-bold"
              style={{ fontSize: "11px" }}
              title={product.title}
            />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="bg-dark text-white"
            onChange={(evt) => onProductCountChange(evt)}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
