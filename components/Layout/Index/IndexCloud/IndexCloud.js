import React, { Component } from "react";
import styles from "./IndexCloud.module.css";
import Button from "../../../UI/Button/Button";
import { IndexCloudItems } from "./IndexCloudItems";
import Container from "../../../UI/Container/Container";
import Modal from "../../../UI/Modal/Modal";

class IndexCloud extends Component {
  state = {
    renderModal: false,
  };

  renderModalHandler = () => {
    this.setState({ renderModal: true });
  };

  closeModalHandler = () => {
    this.setState({ renderModal: false });
  };

  render() {
    return (
      <Container>
        <div className={styles.indexCloud} id="cloud">
          <div className={styles.indexCloudWrapper}>
            <div className={styles.indexCloudInfo}>
              <h2 className={styles.indexCloudTitle}>
                Estrategia en la nube, migración y automatización.
              </h2>
              <ul className={styles.indexCloudList}>
                {IndexCloudItems.map((item) => {
                  return (
                    <li className={styles.indexCloudItems} key={item.key}>
                      {item.listed}
                    </li>
                  );
                })}
              </ul>
              <div className={styles.indexCloudAntena}>
                <img src="assets/antena.png" alt="Antena" />
                <Button
                  text="Leer más"
                  type="+"
                  clicked={this.renderModalHandler}
                />
              </div>
              <Modal
                show={this.state.renderModal}
                closed={this.closeModalHandler}
              >
                <div className={styles.modalContent}>
                  <h3 className={styles.styledHeading}>Estrategia en la nube, migración y automatización</h3>
                  <ul>
                    <li>Desplegamos tu aplicación en la nube, en cuestión de minutos </li>
                    <li>Utilizamos las tecnologías más actualizadas y escalables para servidores, como AWS y Docker</li>
                    <li>Definimos la arquitectura basada en los requerimientos para hallar la mejor solución.</li>
                  </ul>
                </div>
              </Modal>
            </div>
            <div className={styles.indexCloudImages}>
              <div className={styles.indexCloudImgWrap}>
                <div className={styles.indexCloudCloud}>
                  <h3>Administración en la nube</h3>
                  <img src="assets/nube.png" alt="Nube" />
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
  }
}

export default IndexCloud;
