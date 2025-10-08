import Card from "../card/Card";
import { Link } from "react-router-dom";
import "../../styles/ItemListContainer.css";

const ProductItem = (product) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card>
        <div className="product-item">
          <p>{product.title}</p>
          <img className="product-image" src={product.image} />
        </div>
      </Card>
    </Link>
  );
};

export default ProductItem;
