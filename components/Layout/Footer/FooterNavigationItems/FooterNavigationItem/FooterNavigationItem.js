import React from "react";
import styles from "./FooterNavigationItem.module.css";

const FooterNavigationItem = (props) => {
  return (
    <li className={styles.item}>
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

export default FooterNavigationItem;
