import ProductCard from "../ProductCard/ProductCard";


const ItemListContainer = () => {
  return (
    <div style={{ display:"flex", flexDirection:"row", gap:"12vh",flexWrap:"wrap", justifyContent:"center", paddingTop:"50px"}}>
      <ProductCard title={"Producto 1"} precio={1500} Text={"Descripcion generica 1"} />
      <ProductCard title={"Producto 2"} precio={2000} Text={"Descripcion generica 2"} />
      <ProductCard title={"Producto 3"} precio={1800} Text={"Descripcion generica 3"} />
    </div>
  )
}

export default ItemListContainer