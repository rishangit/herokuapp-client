import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginAttempt } from "../auth.action";
import LoginBase from "./login.base";
import { Row, Col } from "reactstrap";
import { LoginStatus } from "../auth.constants";
import { appActionSetBreadcrumb } from "../../application/app.action";
import {
  FormContainer,
  TextBoxElement,
  ButtonElement
} from "../../../common/forms";

const LoginComponent = props => {
  console.log('LoginComponent')
  let {
    authReducer,
    appActionSetBreadcrumb,
  } = props;
  const loginBase = LoginBase({ ...props });
  const { formSchema, elementSchema } = loginBase;


  useEffect(() => {
    console.log('login status ', authReducer.loginStatus)
    if (authReducer.loginStatus === LoginStatus.LOGIN_SUCCESS) {
      props.history.push("/admin/home");
    }

    appActionSetBreadcrumb([]);

  },[authReducer.loginStatus]);

  return (
      <Row>
        <Col md="12">
          <div>
            <h2 className="title">Loging</h2>
            <FormContainer {...formSchema}>
              <TextBoxElement {...elementSchema.mobile} />
              <TextBoxElement {...elementSchema.password} />
              <ButtonElement {...elementSchema.btnSubmit} />
            </FormContainer>
          </div>
        </Col>
      </Row>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispathToProps = {
  loginAttempt,
  appActionSetBreadcrumb,
};

export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
