import { ProductCard } from "../components";

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
          <ProductCard product={item} key={item.id}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
