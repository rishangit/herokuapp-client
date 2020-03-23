import * as Yup from "yup";

const initModel = {
  mobile:'',
  password:''
}

const validation = new Yup.object().shape({
  mobile: Yup.string().required("Mobile number is required"),
  password: Yup.string().required("Pasword is required")
});


export { validation ,initModel};
