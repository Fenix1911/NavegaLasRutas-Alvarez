import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const useGetProducts = (categoryId) => {
  const [productsFilteredByCategory, setProductsFilteredByCategory] = useState(
    []
  );
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const prodCollection = collection(db, "productos");
    const q = categoryId
      ? query(prodCollection, where("categoryId", "==", categoryId))
      : prodCollection;
    getDocs(q)
      .then((res) => {
        const productsList = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProductsFilteredByCategory(productsList);
      })
      .catch((error) => console.error("Error obteniendo productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);


  return { productsFilteredByCategory, loading };
};
