import { combineReducers } from "redux";
import authReducer from "../modules/auth/auth.reducer";
import clientReducer from "../modules/client/client.reducer";
import adminClinicReducer from "../modules/adminClinic/adminClinic.reducer";

const rootReducer = combineReducers({
  authReducer,
  clientReducer,
  adminClinicReducer
});

export default rootReducer;
