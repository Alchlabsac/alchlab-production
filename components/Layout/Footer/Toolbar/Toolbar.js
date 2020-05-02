import React from "react";
import styles from './Toolbar.modules';

const Toolbar = (props) => {
  return <div className={styles.toolbar}>{props.children}</div>;
};

export default Toolbar;
