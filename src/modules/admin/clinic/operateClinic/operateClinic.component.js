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
    clinicReducer: { clinicStatus, current },
  } = props;

  useEffect(() => {
    currentNumberRequest({
      docId,
      roomId,
    });
  }, []);



  const handleOnStart = (event) => {
    let update = { docId, roomId };
    if (current.queueId) {
      update = { ...update, queueId: current.queueId };
    }
    updateNumberAttempt(update);
  };

  return (
    <div>
      <h1>{current && current.number}</h1>
      <ButtonElement
        label={!current.number ? 'Start' : 'Update'}
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
