import ProductCard from "../ProductCard/ProductCard";


const ItemListContainer = () => {
  return (
    <div style={{ display:"flex", flexDirection:"row", gap:"12vh",flexWrap:"wrap", justifyContent:"center", paddingTop:"50px"}}>
      <ProductCard title={"Producto uno"}  />
      <ProductCard title={"Producto uno"}  />
      <ProductCard title={"Producto 2"}  />
    </div>
  )
}

export default ItemListContainer