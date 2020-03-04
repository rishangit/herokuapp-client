import {
  CURRENT_NUMBER_REQUEST,
  CURRENT_NUMBER_RECEIVED
} from "./client.action";

const initState = {
  currentNumber: 0
};

const clientReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case CURRENT_NUMBER_REQUEST:
      console.log("CURRENT_NUMBER_REQUEST");
      break;
    case CURRENT_NUMBER_RECEIVED:
      let { typ, obj } = payload;
      if (typ == 2) {
        return {
          ...state,
          currentNumber: obj.number
        };
      }
      break;
    default:
      break;
  }
  return state;
};

export default clientReducer;
