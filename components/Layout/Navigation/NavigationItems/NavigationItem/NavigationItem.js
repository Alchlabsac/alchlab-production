import React from "react";

const NavigationItem = (props) => {
  return (
    <li className={props.classes}>
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

export default NavigationItem;
