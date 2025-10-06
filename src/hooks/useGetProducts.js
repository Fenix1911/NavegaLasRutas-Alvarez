import { useState, useEffect } from "react";
import productsData from "../data/products.json";

export const useGetProducts = (categoryId) => {
  const [productsFilteredByCategory, setProductsFilteredByCategory] = useState(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductsByCategory = () => {
      const filteredProducts = productsData.filter(
        (product) => product.categoryId === parseInt(categoryId)
      );
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(filteredProducts);
        }, 2000);
      });
    };

    setLoading(true);

    getProductsByCategory()
      .then((response) => setProductsFilteredByCategory(response))
      .catch((error) =>
        console.error("Error filtering products by category:", error)
      )
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { productsFilteredByCategory, loading };
};
