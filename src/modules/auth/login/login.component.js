import React from "react";
import { connect } from "react-redux";
import { loginAttempt } from "../auth.action";
import LoginBase from "./login.base";
import { FormSchema, ElementSchema } from "./login.constants";
import { Row, Col } from "reactstrap";
import styles from './login.module.scss';

import {
  FormContainer,
  TextBoxElement,
  ButtonElement
} from "../../../common/forms";

const LoginComponent = props => {
  let { loginAttempt } = props;
  let loginBase = LoginBase({ loginAttempt });

  const formSchema = FormSchema(loginBase);
  const elementSchema = ElementSchema(loginBase);

  return (
    <Row>
      <Col md="12">
        <div className={styles.loginWrp}>
          <h3>Loging</h3>
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
  loginAttempt
};

export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
