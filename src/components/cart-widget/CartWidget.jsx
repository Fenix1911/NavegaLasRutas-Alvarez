import "../../styles/CartWidget.css";
import miIcono from "../../assets/cartIcon.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-widget">
      <img className="cart-icon" src={miIcono} />{" "}
      <span className="cart-count">0</span>
    </div>
  );
};

export default CartWidget;
