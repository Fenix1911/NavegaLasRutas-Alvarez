import "../../styles/ItemListContainer.css";
import { useGetCategories } from "../../hooks/useGetCategories";
import CategoryItem from "../category-item/CategoryItem";

const ItemListContainer = () => {
  const { categories, loading } = useGetCategories();
  console.log("Categories y loading desde hook: ", categories, loading);

  if (loading) {
    return <p>Cargando categorías...</p>;
  } else {
    return (
      <div className="category-container">
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    );
  }
};

export default ItemListContainer;
