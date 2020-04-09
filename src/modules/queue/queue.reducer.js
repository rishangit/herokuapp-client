import { ADDTO_QUEUE_ATTEMPT, ADDTO_QUEUE_SUCCESS, GET_BOOKDETAILS_ATTEMPT, GET_BOOKDETAILS_SUCCESS } from "./queue.action";
import {QueueErrorType} from '../../common/consts'
import {QueueStatus} from './queue.constants'
import { Res } from "../../common/consts";
const initState = {
  queueList: [],
  bookList:[],
  queueStatus:QueueStatus.SEACRCH_BOOKING

};

const queueReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADDTO_QUEUE_ATTEMPT:
      break;
    case ADDTO_QUEUE_SUCCESS:

      {
        let { typ } = payload;
        if (typ === Res.ERROR) {
          let { errTyp } = payload;
          switch (errTyp) {
            case QueueErrorType.EXISTING_IN_QUEUE:
              alert("Already added to the queue");
              break;

            default:
              break;
          }
        } else if (typ === Res.SUCCESS_OBJ) {
          let { obj } = payload;
          return {
            ...state,
            queueList: state.queueList.push(obj),
            queueStatus:QueueStatus.CONFIRM_BOOKING
       
          };
        }
      }
      break;
    case GET_BOOKDETAILS_SUCCESS:
      if (payload.typ === Res.SUCCESS_LIST) {
        let { lst } = payload;
        console.log('payload', payload)
        return {
          ...state,
          bookList:lst,
          queueStatus:QueueStatus.LIST_BOOKING
        };
      }
      break;
    default:
      break;
  }
  return state;
};

export default queueReducer;
