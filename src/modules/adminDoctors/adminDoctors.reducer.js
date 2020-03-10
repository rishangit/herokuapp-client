import {
  SAVE_DOC_ATTEMPT,
  SAVE_DOC_SUCCESS,
  DOCLIST_REQUEST,
  DOCLIST_RECEIVED
} from "./adminDoctors.action";
import { Res } from "../../common/consts";

const initState = {
  docList: [],
  newDoc: {
    firstName: "",
    lastName: "",
    qulification: "",
    mobile: ""
  }
};

const docsReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SAVE_DOC_ATTEMPT:
      console.log("SAVE_DOC_ATTEMPT");
      break;
    case SAVE_DOC_SUCCESS:
      console.log("SAVE_DOC_SUCCESS", payload);
      break;
    case DOCLIST_REQUEST:
      console.log("DOCLIST_REQUEST");
      return { ...state, loading: true };
      break;
    case DOCLIST_RECEIVED:
      console.log("DOCLIST_RECEIVED", payload);
      if (payload.typ == Res.SUCCESS_LIST) {
        let { typ, lst } = payload;
        return  {
          ...state,
          docList: lst
        };
      }
      break;

    default:
      break;
  }
  return state;
};

export default docsReducer;
