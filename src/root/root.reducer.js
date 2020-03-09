import { combineReducers } from 'redux';
import authReducer from '../modules/auth/auth.reducer';
import clientReducer from '../modules/client/client.reducer';
import adminClinicReducer from '../modules/adminClinic/adminClinic.reducer';
import docsReducer from '../modules/adminDoctors/adminDoctors.reducer'

const rootReducer = combineReducers({
  authReducer,
  clientReducer,
  adminClinicReducer,
  docsReducer
});

export default rootReducer;
