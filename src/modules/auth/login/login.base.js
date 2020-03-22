import React, { useState } from "react";

const LoginBase = props => {
  let { loginAttempt } = props;
  let [initModel, setInitModel] = useState({ mobile: "", password: "" });
  let [btnDisabled, setBtnDisabled] = useState(true);

  const funcOnSubmit = values => {
    loginAttempt(values);
  };

  const funcFormChanged = props => {
    setBtnDisabled(false);
  };

  return {
    initModel,
    btnDisabled,
    funcOnSubmit,
    funcFormChanged
  };
};

export default LoginBase;
