import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import ProductsViews from "./views/ProductsViews";
import CategoriaViews from "./views/CategoriaViews";
import DetalleViews from "./views/DetalleViews";
import { GeneralProvider } from "./context/GeneralContext";
import Carrito from "./views/Carrito";

function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<ProductsViews />} />
        <Route path="/categorias/:categoria" element={<ProductsViews />} />
        <Route path="/product/:id" element={<DetalleViews />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
    </GeneralProvider>
    
  );
}

export default App;
