import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import pikachu from "../../assets/pikachu_card.png";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Encontra tu proxima compra</h1>
          <p>Encuentra tus productos favoritos. Compra fácil y rápido.</p>
          <div className="hero-actions">
            <Link to="/categories" className="btn">Ver categorías</Link>
            <Link to="/cart" className="btn secondary">Ver carrito</Link>
          </div>
        </div>
        <img src={pikachu} alt="Featured" className="hero-image" />
      </section>

      <section className="features">
        <div className="feature">
          <h3>Productos destacados</h3>
          <p>Seleccionados para ti.</p>
        </div>
        <div className="feature">
          <h3>Envíos rápidos</h3>
          <p>Entregas seguras y rastreables.</p>
        </div>
        <div className="feature">
          <h3>Soporte</h3>
          <p>Contáctanos si tienes dudas.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
