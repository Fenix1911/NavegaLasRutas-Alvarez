import "../../styles/ProductDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../item-count/ItemCount";




const ProductDetail = ({ product }) => {
  const {addToCart} = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    addToCart(product, cantidad);
    setPurchase(true);
  }

  return (
    <div className="product-detail">
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img className="product-image" src={product.image} alt={product.title} />
      {!purchase ? (
        <ItemCount stock={product.stock} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button className="buttonFinalizarCompra">Finalizar compra</button>
        </Link>
      )}
    
    </div>
  );
};

export default ProductDetail;
