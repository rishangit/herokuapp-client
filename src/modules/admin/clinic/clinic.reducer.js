import {
  SAVE_ROOM_ATTEMPT,
  SAVE_ROOM_SUCCESS,
  ROOMLIST_REQUEST,
  ROOMLIST_RECEIVED,
  CHANGE_CLINIC_STATUS
} from './clinic.actions';
import { Res } from '../../../common/consts';
import { ClinicStatus } from './clinic.constants';

const initState = {
  clinicStatus: ClinicStatus.CLINIC_START,
};

const clinicReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SAVE_ROOM_ATTEMPT:
      break;
    case SAVE_ROOM_SUCCESS:
      break;
    case ROOMLIST_REQUEST:
      break;
    case ROOMLIST_RECEIVED:
      {
        let { typ, lst } = payload;
        if (typ === Res.SUCCESS_LIST) {
          return {
            ...state,
            roomList: lst,
          };
        }
      }
      break;
      case CHANGE_CLINIC_STATUS:
        return{
          ...state,
          clinicStatus:payload
        }
    default:
      break;
  }
  return state;
};

export default clinicReducer;
