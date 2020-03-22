import * as Yup from "yup";

const validationSchema = new Yup.object().shape({
  mobile: Yup.string().required("Mobile number is required"),
  password: Yup.string().required("Pasword is required")
});

const FormSchema = props => {
  let { initModel, funcOnSubmit, funcFormChanged } = props;
  let schema = {
    initModel: initModel,
    validation: validationSchema,
    onSubmit: funcOnSubmit,
    onChange: funcFormChanged
  };
  return schema;
};

const ElementSchema = props => {
  let { btnDisabled } = props;
  console.log('btnDisabled',btnDisabled)
  let schema = {
    mobile: {
      name: "mobile",
      label: "Mobile"
    },
    password: {
      name: "password",
      label: "Password"
    },
    btnSubmit: {
      label: "Login",
      disabled: btnDisabled
    }
  };
  return schema;
};

export { FormSchema, ElementSchema };
