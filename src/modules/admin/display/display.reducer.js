import {
  LISTENING_DISPLAY_REQUEST,
  LISTENING_DISPLAY_RECEIVED,
} from './display.actions';
import { Res } from '../../../common/consts';

const initState = {
  listening: false,
  obj: {},
};

const displayReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LISTENING_DISPLAY_REQUEST:
      return {
        ...state,
        listening: true,
      };
    case LISTENING_DISPLAY_RECEIVED:
      {
        let { typ, obj } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            obj: obj,
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

export default displayReducer;
