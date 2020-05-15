import React from "react";
import styles from "./PageTitleBox.module.css"

const PageTitleBox = ({ text }) => {
  return (
    <div className={styles.pageTitleBox}>
      <p className={styles.pageTitleBoxText}>{text}</p>
    </div>
  );
};

export default PageTitleBox;
