import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { initModel, validation } from './addDoctor.constants';
import { saveDocAttemp } from '../doctors.action';

const AddDoctorBase = props => {
  const dispatch = useDispatch();
  const [btnDisabled, setBtnDisabled] = useState(true);

  const onSubmit = values => {
    dispatch(saveDocAttemp(values));
  };

  const onChange = values => {
    setBtnDisabled(false);
  };

  const formSchema = {
    initModel,
    validation,
    onSubmit,
    onChange,
  };

  const elementSchema = {
    firstName: {
      name: 'firstName',
      label: 'First Name',
    },
    lastName: {
      name: 'lastName',
      label: 'Last Name',
    },
    qulification: {
      name: 'qulification',
      label: 'Qulification',
    },
    mobile: {
      name: 'mobile',
      label: 'Mobile',
      type: 'tel',
    },
    btnSubmit: {
      label: 'Save',
      disabled: btnDisabled,
    },
  };

  return { formSchema, elementSchema };
};

export default AddDoctorBase;
