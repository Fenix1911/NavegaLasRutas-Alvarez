import Card from "../card/Card";
import { Link } from "react-router-dom";
import "../../styles/CategoryItem.css";

const CategoryItem = (category) => {
  return (
    <Link to={`/products/${category.id}`}>
      <Card>
        <div className="category-item">
          <img src={category.image} alt={category.name} />
          <p>{category.name}</p>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryItem;
