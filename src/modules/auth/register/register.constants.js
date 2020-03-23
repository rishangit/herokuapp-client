import * as Yup from "yup";

const initModel = {
  firstName: "",
  lastName: "",
  mobile: "",
  password: "",
  passwordConfirmation: ""
};

const validation = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  mobile: Yup.string().required("Mobile number is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().required("Password Confirmation is required").oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  )
});

export { validation, initModel };
