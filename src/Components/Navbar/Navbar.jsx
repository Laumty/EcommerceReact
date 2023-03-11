
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import  Imagen1 from "../../images/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  let numero = 12;
  return (
    <div className={styles.containerNavbar}>
      <img
        src={Imagen1}
        alt=""
        style={{ width: "8%", objectFit: "contain" }}/>
      <h1 className={styles.containerNavbarTitle}>Dangerous Level!</h1>

      <ul className={styles.containerList}>
      <Link to="/" > Inicio </Link>
        <Link to ="/about">Nosotros</Link>
        <Link to ="/products">Productos</Link>
        <Link to ="/login">Login</Link>
        <Link to ="/faq">Preguntas Frecuentes</Link>
      </ul>
      <CartWidget numero={numero} />
    </div>
  );
};

export default Navbar;
