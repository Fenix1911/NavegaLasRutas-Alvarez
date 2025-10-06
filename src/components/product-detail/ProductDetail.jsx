const ProductDetail = ({ product }) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;
