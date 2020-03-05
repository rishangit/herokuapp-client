import React, { useEffect } from "react";
import { connect } from "react-redux";
import { currentNumberRequest, listeningRequest } from "../client.action";

const ClientWatchComponent = props => {
  useEffect(() => {
    props.currentNumberRequest();
  }, []);


  useEffect(() => {
    if (!props.clientReducer.listening) {
      props.listeningRequest()
    }
  }, [props.clientReducer.listening]);

  
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
  currentNumberRequest,
  listeningRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientWatchComponent);
