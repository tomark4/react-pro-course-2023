import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const products = [
  { id: "1", title: "Coffe mug card 1", img: "coffee-mug.png" },
  { id: "2", title: "Coffe mug card 2", img: "coffee-mug.png" },
];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((item) => (
          <ProductCard product={item} key={item.id} className="bg-dark">
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}

        {products.map((item) => (
          <ProductCard
            product={item}
            key={item.id}
            className="bg-dark text-white"
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
