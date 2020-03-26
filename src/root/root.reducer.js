import { combineReducers } from 'redux';
import appReducer from '../modules/app/app.reducer';
import authReducer from '../modules/auth/auth.reducer';
import clientReducer from '../modules/client/client.reducer';
import adminClinicReducer from '../modules/adminClinic/adminClinic.reducer';
import docsReducer from '../modules/adminDoctors/adminDoctors.reducer';
import clientBookNumberReducer from '../modules/clientBookNumber/clientBookNumber.reducer'
import queueReducer from '../modules/queue/queue.reducer'
const rootReducer = combineReducers({
  appReducer,
  authReducer,
  clientReducer,
  adminClinicReducer,
  docsReducer,
  clientBookNumberReducer,
  queueReducer
});

export default rootReducer;
