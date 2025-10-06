import { useState, useEffect } from "react";
import categoriesData from "../data/categories.json";

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(categoriesData);
        }, 2000);
      });
    };

    getCategories()
      .then((response) => setCategories(response))
      .catch((error) => console.error("Error fetching categories:", error))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
};
