import {
  CLIENT_DOCLIST_RECEIVED,
  CLIENT_DOCLIST_REQUEST,
  CLIENT_SELECT_DOC,
  CLIENT_NUMBER_REQUEST,
  CLIENT_NUMBER_RECEIVED
} from "./clientBookNumber.action";

import { Res } from "../../common/consts";
const initState = {
  docList: [],
  selectedDoc: {},
  nextNumber: 0,
  client: {
    mobile: "",
    name: "",
    number: null
  }
};

const clientBookNumberReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case CLIENT_DOCLIST_REQUEST:
      break;
    case CLIENT_DOCLIST_RECEIVED:
      let { typ, lst } = payload;
      return {
        ...state,
        docList: lst
      };
      break;
    case CLIENT_SELECT_DOC:
      return {
        ...state,
        selectedDoc: payload
      };
      break;
    case CLIENT_NUMBER_REQUEST:
      {
        let { typ, obj } = payload;
        if (payload.typ == Res.SUCCESS_OBJ) {
          return {
            ...state,
            nextNumber: obj.nextNumber
          };
        }
      }
      break;
    case CLIENT_NUMBER_RECEIVED:
      {
        let { typ, obj } = payload;
        if (payload.typ == Res.SUCCESS_OBJ) {
          return {
            ...state,
            nextNumber: obj.nextNumber
          };
        }
      }
      break;
    default:
      break;
  }
  return state;
};
export default clientBookNumberReducer;
