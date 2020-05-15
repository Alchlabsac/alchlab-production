import React, { Component } from "react";
import styles from "./IndexInfo.module.css";
import Container from "../../../UI/Container/Container";
import Button from "../../../UI/Button/Button";
import PageTitleBox from "../../../UI/Boxes/PageTitleBox/PageTitleBox";
import Modal from "../../../UI/Modal/Modal";

class IndexInfo extends Component {
  state = {
    renderModal: false,
  };

  renderModalHandler = () => {
    this.setState({ renderModal: true });
  }

  closeModalHandler = () => {
    this.setState({ renderModal: false });
  }

  render() {
    return (
      <div className={styles.IndexInfo} id="us">
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
                  <Button
                    text="Leer más"
                    type="+"
                    clicked={this.renderModalHandler}
                  />
                  <Modal
                    show={this.state.renderModal}
                    closed={this.closeModalHandler}
                  >
                    <div className={styles.modalContent}>
                      <h2>"Convertiremos tus ideas en proyectos reales"</h2>
                      <p>No hay secretos ni alquimia detrás del laboratorio, solo personas que estamos dispuestas a ayudarte a entender y plasmar tus ideas, siempre dedicados a conseguir lo que logramos plasmar junto con nuestros clientes</p>
                      <a target="_blank" href="https://api.whatsapp.com/send?phone=51947157351&text=%C2%A1Hola!%2C%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20de%20c%C3%B3mo%20comenzar%20un%20proyecto">¡Quiero comenzar un proyecto!</a>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default IndexInfo;
