import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

const Category = () => {
    return (
        <div>
            <ul className={styles.containerList}>
                <Link to="/" className={styles.categoryItems}>
                Todas
                </Link>
                <Link to="/category/Cuadros" className={styles.categoryItems}>
                Cuadros
                </Link>
                <Link to="/category/Peluches" className={styles.categoryItems}>
                Peluches
                </Link>
                <Link to="/category/Accesorios" className={styles.categoryItems}>
                Accesorios
                </Link>
            </ul>
        </div>

)
}

export default Category