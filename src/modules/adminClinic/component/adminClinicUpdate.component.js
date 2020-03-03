import React from "react";
import { connect } from "react-redux";
import { updateNumberAttempt } from "../adminClinic.action";
import {serverPath} from '../../../common/consts'
import {ajax} from 'rxjs/ajax'
import { map, tap } from 'rxjs/operators';

const AdminClinicUpdateComponent = props => {
  console.log("AdminClinicUpdateComponent", props);


  const handleUpdateNumber = () => {
    // props.updateNumberAttempt(props.adminClinicReducer.currentNumber);

    ajax({
        url: `${serverPath}add_number`,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ current: 2 })
      }).pipe(map(result => result.response)).subscribe(data=>{
        console.log(data)
      })

  };


  return (
    <>
      <div>This admin clinic update</div>
      <button onClick={handleUpdateNumber}>Update Number</button>
      <div>current Number</div>
      <h1>{props.adminClinicReducer.currentNumber}</h1>
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  updateNumberAttempt
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminClinicUpdateComponent);
