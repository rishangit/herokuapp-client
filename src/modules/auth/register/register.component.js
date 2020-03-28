import React from "react";
import { connect } from "react-redux";
import RegisterBase from "./register.base";
import { Row, Col } from "reactstrap";
import { registerAttempt } from "../auth.action";
import {
  FormContainer,
  TextBoxElement,
  ButtonElement
} from "../../../common/forms";

const RegisterComponent = props => {
  const registerBase = RegisterBase({ ...props });
  const { formSchema, elementSchema } = registerBase;

  return (
      <Row>
        <Col md="12">
          <div>
            <h2 className="title">Register</h2>
            <FormContainer {...formSchema}>
              <TextBoxElement {...elementSchema.firstName} />
              <TextBoxElement {...elementSchema.lastName} />
              <TextBoxElement {...elementSchema.mobile} />
              <TextBoxElement {...elementSchema.password} />
              <TextBoxElement {...elementSchema.passwordConfirmation} />
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

const mapDispatchToProps = {
  registerAttempt
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
