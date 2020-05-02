import React from "react";
import styles from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={styles.item}>
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

export default NavigationItem;
