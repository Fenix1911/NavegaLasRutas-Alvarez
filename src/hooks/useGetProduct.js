import { useState, useEffect } from "react";
import productsData from "../data/products.json";

export const useGetProduct = (productId) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = () => {
      const productFinded = productsData.find(
        (product) => product.id === parseInt(productId)
      );
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productFinded);
        }, 2000);
      });
    };

    setLoading(true);

    getProduct()
      .then((response) => setProduct(response))
      .catch((error) => console.error("Error fetching the product:", error))
      .finally(() => setLoading(false));
  }, [productId]);

  return { product, loading };
};
