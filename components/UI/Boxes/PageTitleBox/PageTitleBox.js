import React from "react";
import styles from "./PageTitleBox.module.css"

const PageTitleBox = ({ text }) => {
  return (
    <div class={styles.pageTitleBox}>
      <p class={styles.pageTitleBoxText}>{text}</p>
    </div>
  );
};

export default PageTitleBox;
