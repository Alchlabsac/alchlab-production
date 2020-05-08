import React from "react";
import styles from "./Header.module.css";
import Hero from "./Hero/Hero";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Logo from "./Logo/Logo";
import { headerItems } from './headerItems';

const Header = () => {
  return (
    <header className={styles.header}>
      <Hero />
      <div className={styles.headerNav}>
        <Logo />
        <NavigationItems items={headerItems} listClasses={styles.nav} itemClasses={styles.item} />
      </div>
    </header>
  );
};

export default Header;
