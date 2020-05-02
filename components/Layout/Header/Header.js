import React from "react";
import styles from "./Header.module.css";
import Hero from "./Hero/Hero";
import NavigationItems from "./Navigation/NavigationItems/NavigationItems";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Hero />
      <div className={styles.headerNav}>
        <Logo />
        <NavigationItems />
      </div>
    </header>
  );
};

export default Header;
