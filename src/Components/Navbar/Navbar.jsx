
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import  Imagen1 from "../../images/logo.png"

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src={Imagen1}
        alt=""
        style={{ width: "8%", objectFit: "contain" }}/>
      <h1 className={styles.containerNavbarTitle}>Dangerous Level!</h1>
      <ul className={styles.containerList}>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Productos</li>
        <li>Registrame!</li>
        <li>Preguntas</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
