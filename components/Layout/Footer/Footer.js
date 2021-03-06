import React from "react";
import styles from "./Footer.module.css";
import Toolbar from "./Toolbar/Toolbar";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import { footerItems } from './footerItems';
import FooterLogo from "./FooterLogo/FooterLogo"

const Footer = () => {
  return (
    <footer>
      <Toolbar>
        <FooterLogo />
        <NavigationItems items={footerItems} listClasses={styles.nav} itemClasses={styles.item} socialClasses={styles.social} />
      </Toolbar>
      <div className={styles.copy}>
        <span>Alchlab &copy; - Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
