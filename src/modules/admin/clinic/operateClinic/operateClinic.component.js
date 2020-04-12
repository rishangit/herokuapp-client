import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { currentNumberRequest, updateNumberAttempt } from '../clinic.actions';
import { ButtonElement } from '../../../../common/forms';

const OperateClinicComponent = (props) => {
  const {
    currentNumberRequest,
    updateNumberAttempt,
    docId,
    roomId,
    clinicReducer: { clinicStatus, currentNumber },
  } = props;

  useEffect(() => {
    currentNumberRequest({
      docId,
      roomId,
    });
  }, []);

  const handleOnStart = (event) => {
    updateNumberAttempt({
      docId,
      roomId,
    });
  };

  return (
    <div>
      <h1>{currentNumber && currentNumber}</h1>
      <ButtonElement
        label={!currentNumber ? 'Start' : 'Update'}
        onClick={handleOnStart}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = {
  currentNumberRequest,
  updateNumberAttempt,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperateClinicComponent);
