import { useGetProduct } from "../../hooks/useGetProduct";
import ProductDetail from "../product-detail/ProductDetail";
import { useParams } from "react-router-dom";
import "../../styles/ProductDetailContainer.css";
const ProductDetailContainer = () => {
  const { productId } = useParams();
  const { product, loading } = useGetProduct(productId);

  if (loading) {
    return <p>Cargando producto...</p>;
  } else {
    return (
      <div className="product-container">
        <ProductDetail product={product} />
      </div>
    );
  }
};

export default ProductDetailContainer;
