import React from "react";
import Auxiliar from "../../../../../hoc/Auxiliar/Auxiliar";
import styles from "./ProductModal.module.css"

const ProductModal = () => {
  return <Auxiliar>
    <h3 className={styles.styledHeading}>Estrategia de producto</h3>
    <ul>
      <li>Tener una base sólida del producto que quieres venderle a tus clientes es esencial por eso nosotros te ayudamos a encontrar el punto perfecto para plasmar tu marca en la web</li>
      <li>Si tu negocio está empezando en la web somos tu mejor opción, ya podemos darte el asesoramiento necesario para que encuentres la mejor forma de plasmar tu idea y tener éxito en llegar a tu público objetivo</li>
      <li>Para poder vender tu marca hace falta que a tu consumidor le guste lo que ve en este caso contamos con un excelente equipo de diseñadores que siempre estará para atender tus necesidades</li>
      <li>Al ingresar al mercado con una página web necesitas que la publicidad sea tu aliada por lo cual estamos en la obligación de hacer que tu sitio web se posicione de la mejor forma encargándonos de que el SEO se trabaje de forma impecable</li>
    </ul>
  </Auxiliar>;
};

export default ProductModal;
