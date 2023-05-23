import { useState, useEffect } from "react";
import { products as dbProducts } from "../data/products";
import { ProductI } from "../interfaces/interfaces";

const fetchData = (): Promise<ProductI[]> =>
  new Promise((resolve) => setTimeout(() => resolve(dbProducts), 3000));

const useProducts = () => {
  const [products, setProducts] = useState<ProductI[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const resp = await fetchData();
        setProducts(resp);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  });
  return { loading, products };
};

export default useProducts;
