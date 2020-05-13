import React from "react";
import PageTitleBox from "../UI/Boxes/PageTitleBox/PageTitleBox";
import ContactBox from "./ContactBox/ContactBox";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div style={{ marginTop: "2rem", marginBottom: "5rem" }}>
      <Container>
        <div style={{ display: "flex" }}>
          <div style={{ width: "40%" }}>
            <div>
              <PageTitleBox text="Contacto" />
            </div>
            <div>
              <ContactBox title="Soporte" phone="+51 947157351" email="admin@alchlab.com" />
              <ContactBox title="Ventas" phone="+51 947157351" email="admin@alchlab.com" />
              <div className="contact__button">
                <Button link="/" text="Enviar mensaje" type="&#9658;" />
              </div>
            </div>
          </div>
          <div style={{ width: "100%", marginLeft: "1rem" }}>
            <div>
              <iframe
                width="100%"
                height="600"
                src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Av.%20las%20Praderas%20177+(Mi%20nombre%20de%20egocios)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              >
                <a href="https://www.mapsdirections.info/calcular-ruta.html">
                  Mapa de Ruta
                </a>
              </iframe>
            </div>
            <br />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
