import React from "react";
import Auxiliar from "../../../../../hoc/Auxiliar/Auxiliar";
import styles from "./DesignModal.module.css"

const DesignModal = () => {
  return (
    <Auxiliar>
      <h3 className={styles.styledHeading}>Diseño UX y UI</h3>
      <ul>
        <li>Plasmamos tus ideas con las mejores herramientas para crear una comunicación clara y precisa logrando el resultado esperado</li>
        <li>Damos vida a tu proyecto siguiendo técnicas de diseño del momento</li>
        <li>Trabajamos de la mano con la opinión que nos des asegurando un producto agradable para ti y tus futuros usuarios</li>
        <li>Nuestro personal encargado en el área de diseño está preparado para aplicar las debidas pruebas de usabilidad y darte un producto con los mejores estándares de diseño UX/UI</li>
      </ul>
    </Auxiliar>
  );
};

export default DesignModal;
