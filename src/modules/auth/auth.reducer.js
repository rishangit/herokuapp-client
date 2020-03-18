import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  REGISTER_ATTEMPT,
  REGISTER_SUCCESS
} from "./auth.action";
import { Res, UserErrorType } from "../../common/consts";

const initState = {
  loggedUser: {
    _id: "asdsadasd"
  },
  newUser: {
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
    passwordConfirmation: ""
  }
};
const authReducer = (state = initState, action) => {
  let { type, payload } = action;

  switch (type) {
    case LOGIN_ATTEMPT:
      console.log("login_attempt/auth.reducer");
      break;
    case LOGIN_SUCCESS:
      console.log("login_success/auth.reducer");
      break;
    case REGISTER_ATTEMPT:
      console.log("REGISTER_ATTEMPT");
      break;
    case REGISTER_SUCCESS:
      {
        let { typ } = payload;
        if (typ == Res.ERROR) {
          let { errTyp } = payload;
          switch (errTyp) {
            case UserErrorType.EXISTING_USER:
              alert("User already exist");
              break;

            default:
              break;
          }
        } else if (typ == Res.SUCCESS_OBJ) {
          let { obj } = payload;
          return state;
        }
      }
      console.log("REGISTER_SUCCESS");
      break;

    default:
      break;
  }
  return state;
};

export default authReducer;
