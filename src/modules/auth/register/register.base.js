import React, { useState } from "react";
import { initModel, validation } from "./register.constants";

const RegisterBase = props => {
  let { registerAttempt } = props;
  let [btnDisabled, setBtnDisabled] = useState(true);

  const onSubmit = values => {
    registerAttempt(values);
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
    firstName: {
      name: "firstName",
      label: "First Name"
    },
    lastName: {
      name: "lastName",
      label: "Last Name"
    },
    mobile: {
      name: "mobile",
      label: "Mobile",
      type:"number"
    },
    password: {
      name: "password",
      label: "Password",
      type:"password"
    },
    passwordConfirmation: {
      name: "passwordConfirmation",
      label: "Password Confirmation",
      type:"password"
    },
    btnSubmit: {
      label: "Register",
      disabled: btnDisabled
    }
  };

  return { formSchema, elementSchema };
};

export default RegisterBase;
