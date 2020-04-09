import React from "react";
import { connect } from "react-redux";
import AddDoctorBase from "./addDoctor.base";
import { Row, Col } from "reactstrap";
import { saveDocAttemp } from "../doctors.action";
import {
  FormContainer,
  TextBoxElement,
  ButtonElement
} from "../../../../common/forms";

const AddDoctorComponent = props => {
  const addDoctorBase = AddDoctorBase({ ...props });
  const { formSchema, elementSchema } = addDoctorBase;

  return (
    <Row>
      <Col md="12">
        <div>
          <h2 className="title">Doctor Informations</h2>
          <FormContainer {...formSchema}>
            <TextBoxElement {...elementSchema.firstName} />
            <TextBoxElement {...elementSchema.lastName} />
            <TextBoxElement {...elementSchema.qulification} />
            <TextBoxElement {...elementSchema.mobile} />
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

const mapDispatchToPorps = {
  saveDocAttemp
};

export default connect(mapStateToProps, mapDispatchToPorps)(AddDoctorComponent);
