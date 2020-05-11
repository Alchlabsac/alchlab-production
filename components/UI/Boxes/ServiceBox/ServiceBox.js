import React from "react";
import Button from "../../Button/Button";
import styles from "./ServiceBox.module.css";

const ServiceBox = ({ items }) => {
  return (
    <div className={styles.serviceBoxWrapper}>
      {items.map((item) => {
        return (
          <div className={styles.serviceBox}>
            <span>
              <img
                src={item.imgSrc}
                className={styles.serviceBoxIcon}
                alt={item.imgAlt}
              />
            </span>
            <h2 className={styles.serviceBoxTitle}>{item.boxTitle}</h2>
            <p className={styles.serviceBoxDescription}>
              {item.boxDescription}
            </p>
            <Button link={item.btnLink} text="Leer más" type="+"></Button>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceBox;
