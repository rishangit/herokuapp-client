import React from "react";
import { connect } from "react-redux";
import {saveRoomAttemp} from '../clinic.actions'
import AddRoomBase from "./addRoom.base";
import { Row, Col } from "reactstrap";
import {
  FormContainer,
  TextBoxElement,
  ButtonElement
} from "../../../../common/forms";
import {appActionSetSubHeader} from "../../../application/app.action"

const AddRoomComponent = props => {
  const addRoomBase = AddRoomBase({ ...props });
  const { formSchema, elementSchema } = addRoomBase;




  return (
    <Row>
      <Col md="12">
        <div>
          <h2 className="title">Room Informations</h2>
          <FormContainer {...formSchema}>
            <TextBoxElement {...elementSchema.roomNumber} />
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
  saveRoomAttemp,appActionSetSubHeader
};

export default connect(mapStateToProps, mapDispatchToPorps)(AddRoomComponent);
