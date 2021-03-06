import React from "react";
import styles from "./ProductBar.module.css";

const ProductBar = ({ items }) => {
  return (
    <div className={styles.ProductBar}>
      {items.map((item) => {
        return (
          <img src={item.path} alt={item.alt} key={item.path} />
        );
      })}
    </div>

  );
}


export default ProductBar;
