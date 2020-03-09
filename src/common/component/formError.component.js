import React from "react";

const FormError = ({ touched, message }) => {
  if (touched) {
    if (message) {
      return <div style={{ color: "red" }}>{message}</div>;
    } else {
      return <div style={{ color: "green" }}> all Good</div>;
    }
  } else return <div>&nbsp;</div>;
};

export default FormError;
