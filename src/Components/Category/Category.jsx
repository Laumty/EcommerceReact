import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


const Category = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
      const itemsCollection = collection(db, "categories");
      getDocs(itemsCollection).then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategoryList(arrayCategories);
      });
    }, []);
    
  return (
    <div>
      <div className={styles.containerNavbar}>
        <ul className={styles.containerList}>
          {categoryList.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;