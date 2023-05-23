import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCartPage } from "../hooks/";
import { products } from "../data/products";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCartPage();

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
            value={product.qty}
            onChange={onProductCountChange}
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
            value={shoppingCart[product.id]?.qty || 0}
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
