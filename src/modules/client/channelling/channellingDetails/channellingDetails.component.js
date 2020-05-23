import React from 'react';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import {
  FormContainer,
  TextBoxElement,
  ButtonElement,
} from '../../../../common/forms';
import BookDetailsBase from './channellingDetails.base';
import { DoctorName } from '../../../common';

const BookDetailsComponent = props => {
  const {
    channellingReducer: { nextNumber, selectedDoc },
  } = useSelector(state => state);

  const loginBase = BookDetailsBase({ ...props });
  const { formSchema, elementSchema } = loginBase;

  return (
    <Row>
      <Col md="12">
        <div>
          <h2 className="title">Reserving Number</h2>
          <div>
            <DoctorName doctor={selectedDoc} />
          </div>
          <div className={'styles.yourNumberWrp'}>
            <label>Your No:</label>
            <div className={'styles.yourNumber'}> {nextNumber}</div>
          </div>
          <FormContainer {...formSchema}>
            <TextBoxElement {...elementSchema.mobile} />
            <TextBoxElement {...elementSchema.name} />
          </FormContainer>
        </div>
      </Col>
    </Row>
  );
};

export default BookDetailsComponent;
