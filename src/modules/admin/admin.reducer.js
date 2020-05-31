import {
  CURRENT_NUMBER_REQUEST,
  CURRENT_NUMBER_RECEIVED,
  LISTENING_REQUEST,
  LISTENING_RECEIVED,
} from './admin.action';
import { Res } from '../../common/consts';
const initState = {
  currentNumber: 0,
  listening: false,
};

const clientReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case CURRENT_NUMBER_REQUEST:
      break;
    case CURRENT_NUMBER_RECEIVED:
      {
        let { typ, obj } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            currentNumber: obj.number,
          };
        }
      }
      break;
    case LISTENING_REQUEST:
      return {
        ...state,
        listening: true,
      };

    case LISTENING_RECEIVED:
      {
        let { typ, obj } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            currentNumber: obj.number,
            listening: false,
          };
        } else if (typ === Res.SUCCESS_EMPTY) {
          return {
            ...state,
            listening: false,
          };
        }
      }
      break;
    default:
      break;
  }
  return state;
};

export default clientReducer;
