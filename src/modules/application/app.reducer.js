import {
  APP_ACTION_SHOWNAVI,
  APP_ACTION_SET_ADDNEW,
  APP_ACTION_SET_BREADCRUMB,
} from "./app.action";

const initState = {
  showNavi: false,
  subHeader: {
    newButton: {
      showNew: false,
      newPath: "",
    },
    breadcrumb: [],
  },
};

const appReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case APP_ACTION_SHOWNAVI:
      return { ...state, showNavi: payload };
    case APP_ACTION_SET_ADDNEW:
      return {
        ...state,
        subHeader: { ...state.subHeader, newButton: payload },
      };

    case APP_ACTION_SET_BREADCRUMB:
      return {
        ...state,
        subHeader: { ...state.subHeader, breadcrumb: payload },
      };
      break;
    default:
      break;
  }

  return state;
};

export default appReducer;
