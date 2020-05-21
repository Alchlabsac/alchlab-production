import React from "react";
import Auxiliar from "../../../../../hoc/Auxiliar/Auxiliar";
import styles from "./WebModal.module.css"

const WebModal = () => {
  return <Auxiliar>
    <h3 className={styles.styledHeading}>Desarrollo web y móvil</h3>
    <ul>
      <li>Levantamos la información de los requerimientos de sus proyectos, ¡hacemos sus ideas realidad! </li>
      <li>Transformamos sus ideas en sistemas y aplicaciones complejas listas para ser usadas, asegurando la mejor calidad de código.</li>
      <li>Modelamos los diagramas necesarios para plasmar sus ideas.</li>
      <li>Diseñamos los proyectos basados en el feedback con el cliente, sus comentarios son lo más importante</li>
      <li>Implementamos las tecnologías más recientes e innovadoras para asegurar un proyecto escalable y actualizado</li>
      <li>Codificamos sus proyectos con los últimos estándares y mejores prácticas, llegando a tener un producto limpio y sustentable</li>
      <li>Desplegamos la aplicación con los servicios más rápidos y escalables en la actualidad</li>
    </ul>
  </Auxiliar>;
};

export default WebModal;
