import { switchMap } from "rxjs/operators";
import {
  UPDATE_NUMBER_ATTEMPT,
  UPDATE_NUMBER_SUCCESS
} from "./adminClinic.action";

const initState = {
    currentNumber:0
};

const adminClinicReducer = (state = initState, action) => {
  let { type, payload } = action;

  switch (type) {
    case UPDATE_NUMBER_ATTEMPT:
        console.log('UPDATE_NUMBER_ATTEMPT')
      break;
    case UPDATE_NUMBER_SUCCESS:
        console.log('UPDATE_NUMBER_SUCCESS')
        console.log(payload)
      break;
    default:
      break;
  }

  return state;
};

export default adminClinicReducer;
