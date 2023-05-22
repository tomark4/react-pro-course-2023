import { ProductCard } from "../components";
import { useProduct } from "../hooks";

const product = { id: "1", title: "Coffe mug card", img: "coffee-mug.png" };

const ShoppingPage = () => {
  const { counter, increaseBy } = useProduct();

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons increaseBy={increaseBy} counter={counter} />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
