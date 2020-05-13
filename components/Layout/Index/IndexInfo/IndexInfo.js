import React from "react";
import styles from "./IndexInfo.module.css";
import Container from "../../../UI/Container/Container";
import Button from "../../../UI/Button/Button";
import PageTitleBox from "../../../UI/Boxes/PageTitleBox/PageTitleBox";

const IndexInfo = () => {
  return (
    <div className={styles.IndexInfo}>
      <Container>
        <div className={styles.IndexInfoWrapper}>
          <div style={{ width: "30rem" }}>
            <div style={{ display: "flex" }}>
              <PageTitleBox text="Quienes somos" />
              <div className={styles.IndexInfoLeft__imgsm}>
                <img src="assets/imagen1.png" alt="Image small" />
              </div>
            </div>
            <div className={styles.IndexInfoLeft__imgbig}>
              <img src="assets/imagen2.png" alt="Image big" />
            </div>
          </div>

          <div>
            <div className={styles.IndexInfoRight__wrapper}>
              <h2 className={styles.IndexInfoRight__title}>
                Un pequeño grupo de personas reflexivas y comprometidas que
                pueden cambiar el mundo.
              </h2>
              <p className={styles.IndexInfoRight__description}>
                En alchlab tenemos la fórmula perfecta, un equipo de expertos
                interdisciplinarios con un marco que fomenta la colaboración
                sincera.
              </p>
              <div className={styles.IndexInfoAntena}>
                <img src="assets/antena.png" alt="Antena" />
                <Button link="/" text="Leer más" type="+" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IndexInfo;
