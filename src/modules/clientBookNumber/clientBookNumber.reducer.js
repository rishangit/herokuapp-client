import {
  CLIENT_DOCLIST_RECEIVED,
  CLIENT_DOCLIST_REQUEST,
  CLIENT_SELECT_DOC
} from "./clientBookNumber.action";

const initState = {
  docList: [],
  selectedDoc: {},
  client:{
      mobile:'',
      name:'',
      number:null
  }
};

const clientBookNumberReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case CLIENT_DOCLIST_REQUEST:
      console.log("CLIENT_DOCLIST_REQUEST");
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
    default:
      break;
  }
  return state;
};
export default clientBookNumberReducer;
