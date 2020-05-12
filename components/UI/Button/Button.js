import React from "react";
import styles from "./Button.module.css";

const Button = ({ link, text, type }) => {
  return (
    <a href={link} className={styles.button}>
      <span className={styles.buttonWhite}>{text}</span>
      <span className={styles.buttonGreen}>
        <span>{type}</span>
      </span>
    </a>
  );
};

export default Button;

