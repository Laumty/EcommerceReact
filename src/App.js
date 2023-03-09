import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div>
      <Navbar />
        <ItemListContainer />
        <Footer />
    </div>
  );
}

export default App;


