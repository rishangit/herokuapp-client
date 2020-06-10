import React, { useEffect } from 'react';
import AddDoctorBase from './addDoctor.base';
import { Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import {
  FormContainer,
  TextBoxElement,
  ButtonElement,
} from '../../../../common/forms';
import { commonHeaderChange } from '../../../common/common.action';
import { HeaderInfoAddNew } from '../doctors.constants';

const AddDoctorComponent = props => {
  const addDoctorBase = AddDoctorBase({ ...props });
  const dispatch = useDispatch();
  const { formSchema, elementSchema } = addDoctorBase;

  useEffect(() => {
    dispatch(commonHeaderChange(HeaderInfoAddNew));
  }, []);
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

export default AddDoctorComponent;
