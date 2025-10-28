import { useState, useEffect, use } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const prodCollection = collection(db, "categorias");
    getDocs(prodCollection)
      .then((res) => {
        const categoriesList = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setCategories(categoriesList);
      })
      .catch((error) => console.error("Error obteniendo categorias:", error))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
};
