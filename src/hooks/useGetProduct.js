import { useState, useEffect, use } from "react";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

export const useGetProduct = (productId) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getProduct = () => {
      const docRef = doc(db, "productos", productId);
      return getDoc(docRef);
    };

    getProduct()
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        } else {
          console.error("No se encontro el producto!");
        }
      })
      .catch((error) => console.error("Error obteniendo el producto:", error))
      .finally(() => setLoading(false));
  }, [productId]);


  /* useEffect(() => {
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
  */

  return { product, loading };
};
