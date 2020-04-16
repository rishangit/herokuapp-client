import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  REGISTER_ATTEMPT,
  REGISTER_SUCCESS,
  LOGOUT
} from "./auth.action";
import { Res, UserErrorType } from "../../common/consts";
import { LoginStatus, RegisterStatus } from "./auth.constants";
const initState = {
  loginStatus: LoginStatus.LOGIN_NEW,
  loggedUser: {},
  registerStatus: RegisterStatus.REGISTER_NEW
};
const authReducer = (state = initState, action) => {
  let { type, payload } = action;

  switch (type) {
    case LOGIN_ATTEMPT:
      break;
    case LOGIN_SUCCESS:
      {
        let { typ } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          let { obj } = payload;
          return {
            ...state,
            loggedUser: obj,
            loginStatus: LoginStatus.LOGIN_SUCCESS
          };
        }
      }
      break;
    case REGISTER_ATTEMPT:
      break;
    case REGISTER_SUCCESS:
      {
        let { typ } = payload;
        if (typ === Res.ERROR) {
          let { errTyp } = payload;
          switch (errTyp) {
            case UserErrorType.EXISTING_USER:
              alert("User already exist");
              break;

            default:
              break;
          }
        } else if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            registerStatus: RegisterStatus.REGISTER_SUCCESS
          };
        }
      }
      break;
    case LOGOUT:
      return {
        ...state,
        loggedUser: {},
        loginStatus: LoginStatus.LOGOUT
      };
    default:
      break;
  }
  return state;
};

export default authReducer;
