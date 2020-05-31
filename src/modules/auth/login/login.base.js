import { useState, useRef, useEffect } from 'react';
import { initModel, validation } from './login.constants';
import { useDispatch } from 'react-redux';
import { loginAttempt } from '../auth.action';
import { commonMenuBarButtonChange } from '../../common/common.action';
import { MainButtonStatus } from '../../common';

const LoginBase = props => {
  const dispatch = useDispatch();
  let [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    dispatch(
      commonMenuBarButtonChange({
        mainButtonStatus: MainButtonStatus.BTN_ARROW_FORWARD,
        mainButtonAction: () => handleSubmit(),
      }),
    );
  }, []);
  const onSubmit = values => {
    dispatch(loginAttempt(values));
  };

  const onChange = props => {
    setBtnDisabled(false);
  };

  const handleSubmit = props => {
    formRef.current.handleSubmit();
  };

  const formRef = useRef();

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
    // btnSubmit: {
    //   label: 'Login',
    //   disabled: btnDisabled,
    // },
  };

  return { formSchema, elementSchema };
};

export default LoginBase;
