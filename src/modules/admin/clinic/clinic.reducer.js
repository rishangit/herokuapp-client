import {
  CHANGE_CLINIC_STATUS,
  CURRENT_NUMBER_RECEIVED,
  UPDATE_NUMBER_ATTEMPT,
  UPDATE_NUMBER_SUCCESS
} from './clinic.actions';
import { Res } from '../../../common/consts';
import { ClinicStatus } from './clinic.constants';

const initState = {
  clinicStatus: ClinicStatus.CLINIC_START,
  currentNumber: null,
};

const clinicReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case CHANGE_CLINIC_STATUS:
      return {
        ...state,
        clinicStatus: payload,
      };
    case CURRENT_NUMBER_RECEIVED:
      {
        let { typ, obj:{number} } = payload;
        console.log(number)
        if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            currentNumber: number,
          };
        }
      }
      break;



    default:
      break;
  }
  return state;
};

export default clinicReducer;
