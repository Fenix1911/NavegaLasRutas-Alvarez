import CartWidget from "../cart-widget/CartWidget";
import "../../styles/NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Pokemon Store</h1>
      <ul className="nav-links">
        <NavLink to="/">
          <li>Inicio</li>
        </NavLink>
        <NavLink to="/categories">
          <li>Categorias</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contacto</li>
        </NavLink>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
