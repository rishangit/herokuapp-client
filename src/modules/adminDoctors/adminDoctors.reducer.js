import { SAVE_DOC_ATTEMPT, SAVE_DOC_SUCCESS } from "./adminDoctors.action";

const initState = {
    docList:[],
    newDoc:{
        firstName:'',
        lastName:'',
        qulification:'',
        mobile:''
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

    default:
      break;
  }
  return state;
};

export default docsReducer;
