import {
  SAVE_DOC_ATTEMPT,
  SAVE_DOC_SUCCESS,
  DOCLIST_REQUEST,
  DOCLIST_RECEIVED,
  REMOVE_DOC_ATTEMPT,
  REMOVE_DOC_SUCCESS
} from "./adminDoctors.action";
import { Res } from "../../common/consts";

const initState = {
  docList: [],
  newDoc: {
    firstName: "",
    lastName: "",
    qulification: "",
    mobile: ""
  },
  saveSuccess: false
};

const docsReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SAVE_DOC_ATTEMPT:
      break;
    case SAVE_DOC_SUCCESS:
      return { ...state, loading: true, saveSuccess: true };
      break;
    case DOCLIST_REQUEST:
      return { ...state, loading: true };
      break;
    case DOCLIST_RECEIVED:
      {
        let { typ, lst } = payload;
        if (payload.typ == Res.SUCCESS_LIST) {
          return {
            ...state,
            docList: lst
          };
        }
      }
      break;
    case REMOVE_DOC_ATTEMPT:
      break;
    case REMOVE_DOC_SUCCESS:
      {
        let { typ, obj } = payload;
        if (payload.typ == Res.SUCCESS_OBJ) {
          return {
            ...state,
            docList: state.docList.filter(doc => doc._id !== obj._id)
          };
        }
      }
      break;
    default:
      break;
  }
  return state;
};

export default docsReducer;
