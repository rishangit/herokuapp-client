import React,{useState} from 'react'
import { initModel, validation } from "./addRoom.constants";

const AddRoomBase = props => {
  let { saveRoomAttemp } = props;
  let [btnDisabled, setBtnDisabled] = useState(true);

  const onSubmit = values => {
    saveRoomAttemp(values);
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
    roomNumber: {
      name: "roomNumber",
      label: "Room Number"
    },
    btnSubmit: {
      label: "Save",
      disabled: btnDisabled
    }
  };

  return { formSchema, elementSchema };
};

export default AddRoomBase
