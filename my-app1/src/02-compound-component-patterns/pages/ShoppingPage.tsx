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
          initialValues={{ qty: 4, maxCount: 10 }}
        >
          {({ count, isMaxCountReached, increaseBy, reset }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={reset}
                  style={{
                    backgroundColor: "white",
                    height: "40px",
                    width: "100px",
                    padding: "10px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Reset
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px 0",
                }}
              >
                {count > 0 && (
                  <button onClick={() => increaseBy(-2)}>-2</button>
                )}
                {!isMaxCountReached && (
                  <button
                    onClick={() => increaseBy(+2)}
                    style={{ marginLeft: "10px" }}
                  >
                    +2
                  </button>
                )}
              </div>
              <div>
                <span style={{ textAlign: "center" }}>Count: {count}</span>
              </div>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
