import "../styles/CartWidget.css";
import miIcono from "../assets/cartIcon.svg";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img className="cart-icon" src={miIcono} />{" "}
      <span className="cart-count">0</span>
    </div>
  );
};

export default CartWidget;
