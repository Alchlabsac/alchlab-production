import React from "react";
import styles from "./IndexCloud.module.css";
import Button from "../../../UI/Button/Button";
import { IndexCloudItems } from "./IndexCloudItems";
import Container from "../../../UI/Container/Container";

const IndexCloud = () => {
  return (
    <Container>
      <div className={styles.indexCloud}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", position: "relative" }}>
            <h2 className={styles.indexCloudTitle}>
              Estrategia en la nube, migración y automatización.
              </h2>
            <ul className={styles.indexCloudList}>
              {IndexCloudItems.map((item) => {
                return (
                  <li className={styles.indexCloudItems} key={item.key}>{item.listed}</li>
                );
              })}
            </ul>
            <div className={styles.indexCloudAntena}>
              <img src="assets/antena.png" alt="Antena" />
              <Button link="/" text="Leer más" type="+" />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div className={styles.indexCloudImgWrap}>
              <div className={styles.indexCloudCloud}>
                <img src="assets/nube1.png" alt="Nube" />
              </div>
              <div className={styles.indexCloudImg}>
                <img src="assets/imagen3.png" alt="Servidores" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IndexCloud;
