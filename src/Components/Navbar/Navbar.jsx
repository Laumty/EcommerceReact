// ESTILOS EN LINEA

// ESTILOS CSS

// MODULOS DE CSS
import styles from "./Navbar.module.css";

// IMPORTAR IMAGEN DE SRC
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://png.pngtree.com/png-clipart/20211014/ourlarge/pngtree-assassin-ninja-red-eye-game-logo-png-image_3981066.png"
        alt=""
        style={{ width: "5%", objectFit: "contain" }}/>
      <h1 className={styles.containerNavbarTitle}>Dangerous Level</h1>
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
