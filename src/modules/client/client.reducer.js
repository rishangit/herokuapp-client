import {
  CURRENT_NUMBER_REQUEST,
  CURRENT_NUMBER_RECEIVED,
  LISTENING_REQUEST,
  LISTENING_RECEIVED
} from "./client.action";
import { Res } from "../../common/consts";
const initState = {
  currentNumber: 0,
  listening: false
};

const clientReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case CURRENT_NUMBER_REQUEST:
      break;
    case CURRENT_NUMBER_RECEIVED:
       
      if (payload.typ == Res.SUCCESS_OBJ) {
        let { typ, obj } = payload;
        return {
          ...state,
          currentNumber: obj.number
        };
      }
      break;
    case LISTENING_REQUEST:
      return {
        ...state,
        listening: true
      };
      break;
    case LISTENING_RECEIVED:
       
      if (payload.typ == Res.SUCCESS_OBJ) {
        let { typ, obj } = payload;
        return {
          ...state,
          currentNumber: obj.number,
          listening: false
        };
      }else if(payload.typ == Res.SUCCESS_EMPTY){
        return {
          ...state,
          listening: false
        };
      }
      break;
    default:
      break;
  }
  return state;
};

export default clientReducer;
