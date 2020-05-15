import React from "react";
import PageTitleBox from "../UI/Boxes/PageTitleBox/PageTitleBox";
import ContactBox from "./ContactBox/ContactBox";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import styles from "./Contact.module.css";
import Iframe from 'react-iframe'

const Contact = () => {
  return (
    <div style={{ marginTop: "2rem", marginBottom: "5rem" }} id="contact">
      <Container>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div>
              <PageTitleBox text="Contacto" />
            </div>
            <div>
              <ContactBox title="Soporte" phone="+51 947157351" email="admin@alchlab.com" />
              <ContactBox title="Ventas" phone="+51 947157351" email="admin@alchlab.com" />
              <div className="contact__button">
                <Button link="https://api.whatsapp.com/send?phone=51947157351&text=%C2%A1Hola!%2C%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n" text="Enviar mensaje" type="&#9658;" />
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <div>
              <Iframe
                width="100%"
                height="600"
                src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Av.%20las%20Praderas%20177+(Mi%20nombre%20de%20egocios)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              >
                <a href="https://www.mapsdirections.info/calcular-ruta.html">
                  Mapa de Ruta
                </a>
              </Iframe>
            </div>
            <br />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
