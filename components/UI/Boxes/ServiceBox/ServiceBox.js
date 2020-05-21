import React from "react";
import Button from "../../Button/Button";
import styles from "./ServiceBox.module.css";

const ServiceBox = ({ items, serviceClicked }) => {
  return (
    <div className={styles.serviceBoxWrapper}>
      {items.map((item) => {
        return (
          <div className={styles.serviceBox} key={item.imgSrc}>
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
            <Button text="Leer más" type="+" clicked={() => serviceClicked(item.id)}></Button>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceBox;
