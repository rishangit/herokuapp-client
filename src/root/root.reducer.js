import { combineReducers } from 'redux';
import appReducer from '../modules/application/app.reducer';
import authReducer from '../modules/auth/auth.reducer';
import clientReducer from '../modules/client/client.reducer';
import clientBookNumberReducer from '../modules/clientBookNumber/clientBookNumber.reducer';

import queueReducer from '../modules/admin/queue/queue.reducer';
import docsReducer from '../modules/admin/doctors/doctors.reducer';
import roomsReducer from '../modules/admin/rooms/rooms.reducer';
import clinicReducer from '../modules/admin/clinic/clinic.reducer'
const rootReducer = combineReducers({
  appReducer,
  authReducer,
  clientReducer,
  clinicReducer,
  clientBookNumberReducer,
  queueReducer,
  docsReducer,
  roomsReducer
});

export default rootReducer;
