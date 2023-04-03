
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import  Imagen1 from "../../images/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src={Imagen1}
        alt=""
        style={{ width: "8%", objectFit: "contain" }}/>
      <h1 className={styles.containerNavbarTitle}>Dangerous Level!</h1>

      <ul className={styles.containerList}>
      <Link to="/" > Inicio </Link>
        <Link to ="/Nosotros">Nosotros</Link>
        <Link to ="/Productos">Productos</Link>
        <Link to ="/Preguntas">Preguntas Frecuentes</Link>
        <Link to ="/login" >Login</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
