import React from "react";
import styles from "./PageTitleBox.module.css"

const PageTitleBox = ({ text, extraClass }) => {
  return (
    <div className={`${styles.pageTitleBox} ${extraClass}`}>
      <p className={styles.pageTitleBoxText}>{text}</p>
    </div>
  );
};

export default PageTitleBox;
