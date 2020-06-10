import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginBase from './login.base';
import { LoginStatus } from '../auth.constants';
import {
  FormContainer,
  TextBoxElement,
  ButtonElement,
} from '../../../common/forms';

const LoginComponent = props => {
  const { authReducer } = useSelector(state => state);
  const loginBase = LoginBase({ ...props });
  const { formSchema, elementSchema } = loginBase;

  useEffect(() => {
    if (authReducer.loginStatus === LoginStatus.LOGIN_SUCCESS) {
      props.history.push('/admin/home');
    }
  }, [authReducer.loginStatus, props.history]);

  return (
    <div className={'theme-login-wrp'}>
      <div>
        <h2 className="title">Loging</h2>
        <FormContainer {...formSchema}>
          <TextBoxElement {...elementSchema.mobile} />
          <TextBoxElement {...elementSchema.password} />
          <ButtonElement {...elementSchema.submit} />
        </FormContainer>
      </div>
    </div>
  );
};
export default LoginComponent;
