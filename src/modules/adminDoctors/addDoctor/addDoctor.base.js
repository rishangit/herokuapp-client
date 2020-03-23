import React,{useState} from 'react'
import { initModel, validation } from "./addDoctor.constants";

const AddDoctorBase = props => {
  let { saveDocAttemp } = props;
  let [btnDisabled, setBtnDisabled] = useState(true);

  const onSubmit = values => {
      console.log('values', values)
    saveDocAttemp(values);
  };

  const onChange = values => {
    setBtnDisabled(false)
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
    qulification: {
      name: "qulification",
      label: "Qulification"
    },
    mobile: {
      name: "mobile",
      label: "Mobile",
      type: "number"
    },
    btnSubmit: {
      label: "Save",
      disabled: btnDisabled
    }
  };

  return { formSchema, elementSchema };
};

export default AddDoctorBase
