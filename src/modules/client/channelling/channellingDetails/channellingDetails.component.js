import React from 'react';
import { connect } from 'react-redux';
import {
  clientNumberRequest,
  clentNumberBookAttemp,
} from '../channelling.action';
import BookDetailsBase from './channellingDetails.base';
import { Row, Col } from 'reactstrap';

import {
  FormContainer,
  TextBoxElement,
  ButtonElement,
} from '../../../../common/forms';
import styles from './channellingDetails.module.scss';

const BookDetailsComponent = props => {
  let {
    onRemove,
    channellingReducer: { nextNumber },
    selectedDoc,
  } = props;
  const loginBase = BookDetailsBase({ ...props });
  const { formSchema, elementSchema } = loginBase;
  return (
    <Row>
      <Col md="12">
        <div>
          <span className={styles.btnBack} onClick={onRemove}>
            &lt; back
          </span>
          <h2 className="title">Booking</h2>
          <div>
            {selectedDoc.firstName} {selectedDoc.lastName} (
            {selectedDoc.qulification})
          </div>
          <div className={styles.yourNumberWrp}>
            <label>Your No:</label>
            <div className={styles.yourNumber}> {nextNumber}</div>
          </div>
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
  clentNumberBookAttemp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookDetailsComponent);
