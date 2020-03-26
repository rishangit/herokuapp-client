import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginAttempt } from "../auth.action";
import LoginBase from "./login.base";
import { Row, Col } from "reactstrap";
import { LoginStatus } from "../auth.constants";

import {
  FormContainer,
  TextBoxElement,
  ButtonElement
} from "../../../common/forms";

const LoginComponent = props => {
  let { authReducer } = props;
  const loginBase = LoginBase({ ...props });
  const { formSchema, elementSchema } = loginBase;

  return (
    <Row>
      <Col md="12">
        {authReducer.loginStatus === LoginStatus.LOGIN_ATTEMPT ? (
          <div>
            <h2 className="title">Loging</h2>
            <FormContainer {...formSchema}>
              <TextBoxElement {...elementSchema.mobile} />
              <TextBoxElement {...elementSchema.password} />
              <ButtonElement {...elementSchema.btnSubmit} />
            </FormContainer>
          </div>
        ) : (
          <div>Login success</div>
        )}
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispathToProps = {
  loginAttempt
};

export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
