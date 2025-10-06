import { useGetProducts } from "../../hooks/useGetProducts";
import ProductItem from "../product-item/ProductItem";
import { useParams } from "react-router-dom";
const ProductsListContainer = () => {
  const { categoryId } = useParams();
  const { productsFilteredByCategory, loading } = useGetProducts(categoryId);

  if (loading) {
    return <p>Cargando productos...</p>;
  } else {
    return (
      <div className="category-container">
        {productsFilteredByCategory.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    );
  }
};

export default ProductsListContainer;
