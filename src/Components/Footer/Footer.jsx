import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <ul className={styles.containerFooterList}>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Productos</li>
        <li>Registrame!</li>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;
