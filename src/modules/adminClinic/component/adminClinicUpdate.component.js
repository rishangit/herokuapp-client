import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateNumberAttempt } from "../adminClinic.action";
import { currentNumberRequest } from "../../client/client.action";

const AdminClinicUpdateComponent = props => {
  useEffect(() => {
    props.currentNumberRequest();
  }, []);

  const handleUpdateNumber = () => {
    props.updateNumberAttempt(props.adminClinicReducer.currentNumber);
  };

  return (
    <>
      <div>
        <div>This admin clinic update</div>
        <button onClick={handleUpdateNumber}>Update Number</button>
        <div>current Number</div>
        <h1>{props.clientReducer.currentNumber}</h1>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  updateNumberAttempt,
  currentNumberRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminClinicUpdateComponent);
