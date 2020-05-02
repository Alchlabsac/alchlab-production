import React from "react";
import styles from "./FooterNavigationItems.module.css";
import FooterNavigationItem from "./FooterNavigationItem/FooterNavigationItem";


const FooterNavigationItems = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <FooterNavigationItem link="/">Nosotros</FooterNavigationItem>
        <FooterNavigationItem link="/">Servicios</FooterNavigationItem>
        <FooterNavigationItem link="/">Almacenamiento</FooterNavigationItem>
        <FooterNavigationItem link="/">Contacto</FooterNavigationItem>
      </ul>
    </nav>
  );
};

export default FooterNavigationItems;
