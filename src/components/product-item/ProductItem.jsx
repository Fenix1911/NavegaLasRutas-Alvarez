import Card from "../card/Card";
import { Link } from "react-router-dom";

const ProductItem = (product) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card>
        <div className="product-item">
          <p>{product.title}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ProductItem;
