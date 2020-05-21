import React, { Component } from "react";
import Container from "../../../UI/Container/Container";
import PageTitleBox from "../../../UI/Boxes/PageTitleBox/PageTitleBox";
import ServiceBox from "../../../UI/Boxes/ServiceBox/ServiceBox";
import { ServiceBoxItems } from "../../../UI/Boxes/ServiceBox/ServiceBoxItems";
import styles from "./IndexServices.module.css";
import Modal from "../../../UI/Modal/Modal";
import ProductModal from "./ServicesModals/ProductModal/ProductModal";
import DesignModal from "./ServicesModals/DesignModal/DesignModal";
import WebModal from "./ServicesModals/WebModal/webModal";

class IndexServices extends Component {
  state = {
    renderModal: false,
    actualModal: '',
    modal1: false,
    modal2: false,
    modal3: false
  };

  renderModalHandler = (id) => {
    this.setState(prevState => ({ ...prevState, [id]: !prevState[id], renderModal: !prevState.renderModal, actualModal: id }));
  }

  closeModalHandler = (id) => {
    this.setState(prevState => ({ ...prevState, [id]: !prevState[id], renderModal: !prevState.renderModal, actualModal: '' }));
  }

  render() {
    let actualModal;

    if (this.state.modal1) {
      actualModal = <ProductModal />;
    } else if (this.state.modal2) {
      actualModal = <DesignModal />
    } else if (this.state.modal3) {
      actualModal = <WebModal />
    }

    return (
      <div id="services">
        <Container>
          <div className={styles.services}>
            <PageTitleBox text="Que hacemos" extraClass={styles.pageTitle} />
            <ServiceBox items={ServiceBoxItems} serviceClicked={this.renderModalHandler} />
          </div>
          <Modal
            show={this.state.renderModal}
            closed={() => this.closeModalHandler(this.state.actualModal)}
          >
            {actualModal}
          </Modal>
        </Container>
      </div>
    );
  }
}

export default IndexServices;
