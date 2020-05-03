import {
  LISTENING_CLIENT_REQUEST,
  LISTENING_CLIENT_RECEIVED,
  CURRENT_NUMBER_LIST_REQUEST,
  CURRENT_NUMBER_LIST_RECEIVED,
} from './watch.actions';
import { Res } from '../../../common/consts';

const initState = {
  listening: false,
  obj: {},
  currentList: [],
};

const watchReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LISTENING_CLIENT_REQUEST:
      return {
        ...state,
        listening: true,
      };
    case LISTENING_CLIENT_RECEIVED:
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

    case CURRENT_NUMBER_LIST_REQUEST:
      break;

    case CURRENT_NUMBER_LIST_RECEIVED:
      {
        const { typ, lst } = payload;
        if (typ === Res.SUCCESS_LIST) {
          return {
            ...state,
            currentList: lst,
          };
        }
      }
      break;
    default:
      break;
  }
  return state;
};

export default watchReducer;
