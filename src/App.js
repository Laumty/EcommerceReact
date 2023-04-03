import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Form from "./Components/Form/Form"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from "./Context/CartContext";
import Preguntas from "./Components/Preguntas/Preguntas";
import Nosotros from "./Components/Preguntas/Nosotros/Nosotros";
import Inicio from "./Inicio/Inicio";

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
      <Navbar />
      <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/category/:categoryName" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/login" element={<Login />} />

          <Route path="/formulario" element={<Form />} />

          <Route path="/Preguntas" element={<Preguntas />} />

          <Route path="/Nosotros" element={<Nosotros />} />

          <Route path="/Productos" element={<ItemListContainer />} />

          <Route path="*" element={<h1> error 404: Not found </h1>}  />
        </Routes>
        </CartContextProvider>
        <Footer />

    </BrowserRouter>
  );
}

export default App;


