import React from "react";
import { connect } from "react-redux";
import {
  clientNumberRequest,
  clentNumberBookAttemp
} from "../clientBookNumber.action";
import BookDetailsBase from "./bookDetails.base";
import { Row, Col } from "reactstrap";

import {
  FormContainer,
  TextBoxElement,
  ButtonElement
} from "../../../common/forms";
import styles from './bookDetails.module.scss'

const BookDetailsComponent = props => {
  let {
    onRemove,
    clientBookNumberReducer: { selectedDoc, nextNumber }
  } = props;
  const loginBase = BookDetailsBase({ ...props });
  const { formSchema, elementSchema } = loginBase;
  return (
    <Row>
      <Col md="12">
        <div>
          <span className={styles.btnBack} onClick={onRemove}>&lt; back</span>
          <h2 className="title">Booking</h2>
          <div>
          {selectedDoc.firstName} {selectedDoc.lastName} ({selectedDoc.qulification})
          </div>
          <div className={styles.yourNumberWrp}><label>Your No:</label><div className={styles.yourNumber}> {nextNumber}</div></div>
          <FormContainer {...formSchema}>
            <TextBoxElement {...elementSchema.mobile} />
            <TextBoxElement {...elementSchema.name} />
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
  clientNumberRequest,
  clentNumberBookAttemp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetailsComponent);
