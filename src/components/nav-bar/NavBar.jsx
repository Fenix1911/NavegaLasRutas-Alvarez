import CartWidget from "../cart-widget/CartWidget";
import "../../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Lo Quiero Ya</h1>
      <ul className="nav-links">
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Categorias</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
