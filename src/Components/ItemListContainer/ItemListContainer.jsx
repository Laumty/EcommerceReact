// import ProductCard from "../ProductCard/ProductCard";


// const ItemListContainer = () => {
//   return (
//     <div style={{ display:"flex", flexDirection:"row", gap:"12vh",flexWrap:"wrap", justifyContent:"center", paddingTop:"50px"}}>
//       <ProductCard title={"Producto 1"} precio={1500} text={"Descripcion generica 1"} />
//       <ProductCard title={"Producto 2"} precio={2000} text={"Descripcion generica 2"} />
//       <ProductCard title={"Producto 3"} precio={1800} text={"Descripcion generica 3"} />
//     </div>
//   )
// }

// export default ItemListContainer

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;