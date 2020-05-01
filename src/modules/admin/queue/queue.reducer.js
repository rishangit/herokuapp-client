import {
  ADDTO_QUEUE_ATTEMPT,
  ADDTO_QUEUE_SUCCESS,
  GET_BOOKDETAILS_SUCCESS,
  QUEUE_LIST_REQUEST,
  QUEUE_LIST_RECEIVED,
  CHANGE_BOOKING_STATUS,
  CHANGE_QUEUE_LIST_STATUS,
  UPDATE_QUEUE,
  CHANGE_QUEUE_STATUS_SUCCESS,
} from './queue.action';
import { QueueErrorType } from '../../../common/consts';
import { BookingStatus, QueueStatus } from './queue.constants';
import { Res } from '../../../common/consts';

const initState = {
  queueList: [],
  queueStatus: QueueStatus.LIST_REQUEST,
  bookList: [],
  bookingStatus: BookingStatus.SEACRCH_BOOKING,
};

const queueReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADDTO_QUEUE_ATTEMPT:
      return {
        ...state,
        bookingStatus: QueueStatus.SEACRCH_BOOKING,
      };
    case ADDTO_QUEUE_SUCCESS:
      {
        let { typ } = payload;
        if (typ === Res.ERROR) {
          let { errTyp } = payload;
          switch (errTyp) {
            case QueueErrorType.EXISTING_IN_QUEUE:
              alert('Already added to the queue');
              break;

            default:
              break;
          }
        } else if (typ === Res.SUCCESS_OBJ) {
          let { obj } = payload;
          return {
            ...state,
            queueList: state.queueList.push(obj),
            bookingStatus: QueueStatus.CONFIRM_BOOKING,
          };
        }
      }
      break;
    case GET_BOOKDETAILS_SUCCESS:
      if (payload.typ === Res.SUCCESS_LIST) {
        let { lst } = payload;
        return {
          ...state,
          bookList: lst,
          bookingStatus: BookingStatus.LIST_BOOKING,
        };
      }
      break;

    case QUEUE_LIST_REQUEST:
      return {
        ...state,
        queueStatus: QueueStatus.LIST_REQUEST,
      };
    case QUEUE_LIST_RECEIVED:
      if (payload.typ === Res.SUCCESS_LIST) {
        let { lst } = payload;
        return {
          ...state,
          queueList: lst,
          queueStatus: QueueStatus.LIST_RECEIVED,
        };
      }
      break;
    case CHANGE_BOOKING_STATUS:
      return {
        ...state,
        bookingStatus: payload,
      };
    case CHANGE_QUEUE_LIST_STATUS:
      return {
        ...state,
        queueStatus: payload,
      };
    case UPDATE_QUEUE:
      return {};
    case CHANGE_QUEUE_STATUS_SUCCESS:
      {
        const { typ, obj } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            queueList: state.queueList.map(queue =>
              queue._id === obj._id ? { ...queue, active: obj.active } : queue,
            ),
          };
        }
      }
      break;
    default:
      break;
  }
  return state;
};

export default queueReducer;
