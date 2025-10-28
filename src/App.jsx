import NavBar from "./components/nav-bar/NavBar";
import CategoriesListContainer from "./components/categories-list-container/CategoriesListContainer";
import ProductsListContainer from "./components/products-list-container/ProductsListContainer";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import ProductDetailContainer from "./components/product-detail-container/ProductDetailContainer";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartContainer from './components/cart-container/CartContainer.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesListContainer />} />
          <Route
            path="/products/:categoryId"
            element={<ProductsListContainer />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetailContainer />}
          />
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
