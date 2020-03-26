import React, { useState, useEffect } from "react";
import { initModel, validation } from "./login.constants";
const LoginBase = props => {
  let { authReducer, loginAttempt } = props;
  let [btnDisabled, setBtnDisabled] = useState(true);

  const onSubmit = values => {
    loginAttempt(values);
  };

  const onChange = props => {
    setBtnDisabled(false);
  };

  const formSchema = {
    initModel,
    validation,
    onSubmit,
    onChange
  };

  const elementSchema = {
    mobile: {
      name: "mobile",
      label: "Mobile",
      type:"tel"
    },
    password: {
      name: "password",
      label: "Password",
      type:"password"
    },
    btnSubmit: {
      label: "Login",
      disabled: btnDisabled
    }
  };

  return { formSchema, elementSchema };
};

export default LoginBase;
