import "../styles/ItemListContainer.css";

const ItemListContainer = ({ item }) => {
  return (
    <section className="item-list-container">
      <h2>{item}</h2>
    </section>
  );
};

export default ItemListContainer;
