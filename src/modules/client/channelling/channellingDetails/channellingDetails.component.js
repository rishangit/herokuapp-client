import React from 'react';
import { Row, Col, Container } from 'reactstrap';
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
    <Container className={'theme-channelling-details'}>
      <h2 className="title">Reserving Number</h2>
      <div>
        <DoctorName doctor={selectedDoc} />
      </div>
      <div className={'flx-rc-h flx-c next-number-wrp image-con'}>
        <label>Your No:</label>
        <div className={'next-number'}> {nextNumber}</div>
      </div>
      <div className={'flx-c channelling-form-wrp'}>
        <FormContainer {...formSchema}>
          <TextBoxElement {...elementSchema.mobile} />
          <TextBoxElement {...elementSchema.name} />
          <ButtonElement {...elementSchema.submit}/>
        </FormContainer>
      </div>
    </Container>
  );
};

export default BookDetailsComponent;
