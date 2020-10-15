import React from "react";
import PropTypes from "prop-types";

import StyledButton from "./Button.styles";

const Button = (props) => {
  return (
    <StyledButton
      white={props.white}
      green={props.green}
      formButton={props.formButton}
      normal={props.normal}
    >
      {props.normal ? (
        <a href={props.link}>
          {props.text}
          {props.white ? (
            <span>
              <img src="assets/svg/icon-send.svg" alt="Enviar" />
            </span>
          ) : null}
        </a>
      ) : null}
      {props.formButton ? (
        <div>
          {/** button y proptype de btnType */}
          <input type="submit" value={props.text} />{" "}
          {props.white ? (
            <span>
              <img src="assets/svg/icon-send.svg" alt="Enviar" />
            </span>
          ) : null}
        </div>
      ) : null}
    </StyledButton>
  );
};

Button.propTypes = {
  link: PropTypes.string,
  white: PropTypes.bool,
  green: PropTypes.bool,
  normal: PropTypes.bool,
  formButton: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  link: "",
  green: false,
  white: false,
  normal: false,
  formButton: false,
};

export default Button;
