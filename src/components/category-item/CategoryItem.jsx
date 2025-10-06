import Card from "../card/Card";

const CategoryItem = (category) => {
  return (
    <Card>
      <div>
        <p>{category.name}</p>
      </div>
    </Card>
  );
};

export default CategoryItem;
