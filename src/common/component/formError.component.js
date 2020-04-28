import React from "react";

const FormError = ({ touched, message }) => {
  if (touched) {
    if (message) {
      return <div >{message}</div>;
    } else {
      return <div> </div>;
    }
  } else return <div>&nbsp;</div>;
};

export default FormError;
