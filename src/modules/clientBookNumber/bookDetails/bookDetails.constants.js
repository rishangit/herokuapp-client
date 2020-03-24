import * as Yup from "yup";

const initModel = {
  mobile:'',
  name:''
}

const validation = new Yup.object().shape({
  mobile: Yup.string().required("Mobile number is required"),
  name: Yup.string().required("Name is required")
});


export { validation ,initModel};
