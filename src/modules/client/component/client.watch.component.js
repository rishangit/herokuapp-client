import React, { useEffect } from "react";
import { connect } from "react-redux";
import { currentNumberRequest } from "../client.action";

const ClientWatchComponent = props => {
  useEffect(() => {
    props.currentNumberRequest();
  }, []);

  const handleGetNumber = () => {
    props.currentNumberRequest();
  };

  return (
    <>
      <div>client watch component</div>
      <button onClick={handleGetNumber}>Get Number</button>
      <div>current Number</div>
      <h1>{props.clientReducer.currentNumber}</h1>
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};
const mapDispatchToProps = {
  currentNumberRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientWatchComponent);
