import React, { useState } from "react";
import "./FormCheckout.css"
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });
  };

  return (
    <div>
    <h1 className="title">Terminar Compra</h1>
    <div className="CheckoutContianer">
      <form onSubmit={handleSubmit} className="formContainer">
        <input className="Imput"
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input className="Imput"
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input className="Imput"
          type="text"
          placeholder="Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />

        <button type="submit" className="Imputa">Comprar</button>
      </form>
      
    </div></div>
      
  );
};

export default FormCheckout;