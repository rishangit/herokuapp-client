import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initModel, validation } from './channellingDetails.constants';
import { Sort } from '../../../../common/consts';
import { MainButtonStatus } from '../../../common';
import {
  clientNumberRequest,
  clentNumberBookAttemp,
} from '../channelling.action';
import { commonMenuBarButtonChange } from '../../../common/common.action';

const BookDetailsBase = props => {
  const dispatch = useDispatch();
  const {
    channellingReducer: { nextNumber, selectedDoc },
  } = useSelector(state => state);

  let [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    dispatch(
      clientNumberRequest({
        filters: [{ docId: selectedDoc._id }],
        sorts: { number: Sort.ASD },
      }),
    );
    dispatch(
      commonMenuBarButtonChange({
        mainButtonStatus: MainButtonStatus.BTN_ARROW_FORWARD,
        mainButtonAction: () => handleSubmit(),
      }),
    );
  }, []);

  const onSubmit = values => {
    values.number = nextNumber;
    values.docId = selectedDoc._id;
    dispatch(clentNumberBookAttemp(values));
  };

  const onChange = props => {
    setBtnDisabled(false);
  };

  const handleSubmit = props => {
    formRef.current.handleSubmit();
  };

  const formRef = useRef();

  const formSchema = {
    initModel,
    validation,
    onSubmit,
    onChange,
    innerRef: formRef,
  };

  const elementSchema = {
    mobile: {
      name: 'mobile',
      label: 'Mobile',
    },
    name: {
      name: 'name',
      label: 'Name',
    },
  };

  return { formSchema, elementSchema };
};

export default BookDetailsBase;
