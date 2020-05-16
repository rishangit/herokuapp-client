import {
  COMMON_MENU_BAR_BUTTON_CHANGE,
  COMMON_HEADER_CHANGE,
} from './common.action';
import { MainButtonStatus } from './';

const initState = {
  menuBar: {
    mainButtonStatus: MainButtonStatus.BTN_ARROW_FORWARD,
    mainButtonLink: '',
    showMenuBar: true,
    showBackgroud: true,
  },
  header: {
    showHeader: true,
    showlocation:false,
    location:'',
    backLink:'',
  },
};

const commonReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case COMMON_MENU_BAR_BUTTON_CHANGE:
      return {
        ...state,
        menuBar: { ...state.menuBar, ...payload },
      };
    case COMMON_HEADER_CHANGE:
      return {
        ...state,
        header: { ...state.header, ...payload },
      };
    default:
      return { ...state };
  }
};

export default commonReducer;
