import { ADDTO_QUEUE_ATTEMPT, ADDTO_QUEUE_SUCCESS, GET_BOOKDETAILS_ATTEMPT, GET_BOOKDETAILS_SUCCESS } from "./queue.action";
import { Res } from "../../common/consts";
const initState = {
  queueList: {},
  bookList:[]

};

const queueReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADDTO_QUEUE_ATTEMPT:
      console.log("ADDTO_QUEUE_ATTEMPT");
      break;
    case ADDTO_QUEUE_SUCCESS:
      if (payload.typ === Res.SUCCESS_OBJ) {
        let { obj } = payload;
        return {
          ...state,
          queueList: () => (state.queueList[obj.docId] = obj.queueList)
        };
      }
      break;
    case GET_BOOKDETAILS_SUCCESS:
      if (payload.typ === Res.SUCCESS_LIST) {
        let { lst } = payload;
        return {
          ...state,
          bookList:lst
        };
      }
      break;
    default:
      break;
  }
  return state;
};

export default queueReducer;
