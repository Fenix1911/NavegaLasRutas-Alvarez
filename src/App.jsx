import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./styles/global.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer item="¡Bienvenido a mi tienda online!" />
    </div>
  );
}

export default App;
