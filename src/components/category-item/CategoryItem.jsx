import Card from "../card/Card";
import "../../styles/CategoryItem.css";

const CategoryItem = (category) => {
  return (
    <Card>
      <div className="category-item">
        <p>{category.name}</p>
      </div>
    </Card>
  );
};

export default CategoryItem;
