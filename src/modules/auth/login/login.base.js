import { useState, useRef } from 'react';
import { initModel, validation } from './login.constants';
import { useDispatch } from 'react-redux';
import { loginAttempt } from '../auth.action';

const LoginBase = props => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [btnDisabled, setBtnDisabled] = useState(true);

  const onSubmit = values => {
    dispatch(loginAttempt(values));
  };

  const onChange = props => {
    setBtnDisabled(false);
  };

  const formSchema = {
    initModel,
    validation,
    onSubmit,
    onChange,
    innerRef: formRef,
  };

  const elementSchema = {
    mobile: {
      name: 'mobile',
      label: 'Mobile',
    },
    password: {
      name: 'password',
      label: 'Password',
      type: 'password',
    },
    submit: {
      label: 'Login',
      disabled: btnDisabled,
    },
  };

  return { formSchema, elementSchema };
};

export default LoginBase;
