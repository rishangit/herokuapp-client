import { combineReducers } from 'redux';
import appReducer from '../modules/application/app.reducer';
import authReducer from '../modules/auth/auth.reducer';
import channellingReducer from '../modules/client/channelling/channelling.reducer';
import watchReducer from '../modules/client/watch/watch.reducer';

import queueReducer from '../modules/admin/queue/queue.reducer';
import docsReducer from '../modules/admin/doctors/doctors.reducer';
import roomsReducer from '../modules/admin/rooms/rooms.reducer';
import clinicReducer from '../modules/admin/clinic/clinic.reducer';
import displayReducer from '../modules/admin/display/display.reducer';

const rootReducer = combineReducers({
  appReducer,
  authReducer,
  clinicReducer,
  channellingReducer,
  queueReducer,
  docsReducer,
  roomsReducer,
  displayReducer,
  watchReducer
});

export default rootReducer;
