import CartWidget from "./CartWidget";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Lo Quiero Ya</h1>
      <ul className="nav-links">
        <li>
          <a href="">Indumentaria</a>
        </li>
        <li>
          <a href="">Calzados</a>
        </li>
        <li>
          <a href="#">Accesorios</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
