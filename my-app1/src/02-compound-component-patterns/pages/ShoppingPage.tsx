import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products as dbProducts } from "../data/products";
import "../styles/custom-styles.css";

const products = dbProducts;
const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>My Ultra Uff Shoping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          product={product}
          key={product.id}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
