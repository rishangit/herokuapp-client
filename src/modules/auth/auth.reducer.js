import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  REGISTER_ATTEMPT,
  REGISTER_SUCCESS
} from "./auth.action";

const initState = {
  loggedUser: {
    _id: "asdsadasd"
  },
  newUser: {
    _id: null,
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
      console.log('REGISTER_ATTEMPT')
      break;
    case REGISTER_SUCCESS:
      console.log('REGISTER_SUCCESS')
      break;

    default:
      break;
  }
  return state;
};

export default authReducer;
