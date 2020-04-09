import { combineReducers } from 'redux';
import appReducer from '../modules/application/app.reducer';
import authReducer from '../modules/auth/auth.reducer';
import clientReducer from '../modules/client/client.reducer';
import adminClinicReducer from '../modules/adminClinic/adminClinic.reducer';
import clientBookNumberReducer from '../modules/clientBookNumber/clientBookNumber.reducer'
import queueReducer from '../modules/queue/queue.reducer';
import docsReducer from '../modules/admin/doctors/doctors.reducer';
import roomsReducer from '../modules/admin/rooms/rooms.reducer';

const rootReducer = combineReducers({
  appReducer,
  authReducer,
  clientReducer,
  adminClinicReducer,
  clientBookNumberReducer,
  queueReducer,
  docsReducer,
  roomsReducer
});

export default rootReducer;
