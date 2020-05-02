import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";


const NavigationItems = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavigationItem link="/">Nosotros</NavigationItem>
        <NavigationItem link="/">Servicios</NavigationItem>
        <NavigationItem link="/">Almacenamiento</NavigationItem>
        <NavigationItem link="/">Contacto</NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
