import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Login from "./Components/Login/Login";
import ItemCount from "./Components/ItemCount/ItemCount";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from "./Components/Category/Category";

function App() {


  const onAdd = ( cantidad )=>{
    console.log(`se agrego al carrito ${cantidad} elementos `)
  }

  let stock = 5

  let initial = 1
  return (
    <BrowserRouter>
      <Navbar />
      <Category></Category>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />


        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1> error 404: Not found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


