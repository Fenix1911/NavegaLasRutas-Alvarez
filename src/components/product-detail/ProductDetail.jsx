import "../../styles/ProductDetail.css";

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img className="product-image" src={product.image} alt={product.title} />
      <button className="add-to-cart-button">Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;
