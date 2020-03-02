
import {LOGIN_ATTEMPT,LOGIN_SUCCESS} from './auth.action'

const initState = {};
const authReducer = (state = initState, action) => {
  let { type, payload } = action;

  switch (type) {
    case LOGIN_ATTEMPT:
      console.log('login_attempt/auth.reducer')
      break
    case LOGIN_SUCCESS:
      console.log('login_success/auth.reducer')
      break;
    default:
      break;
  }
  return state;
};

export default authReducer;
