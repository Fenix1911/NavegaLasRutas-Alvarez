import NavBar from "./components/nav-bar/NavBar";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
