import { combineEpics } from 'redux-observable';
import authEpic from '../modules/auth/auth.epic';
import clientBookNumberEpic from '../modules/clientBookNumber/clientBookNumber.epic';

import queueEpic from '../modules/admin/queue/queue.epic';
import roomEpic from '../modules/admin/rooms/rooms.epic';
import docsEpics from '../modules/admin/doctors/doctors.epic';
import clinicEpic from '../modules/admin/clinic/clinic.epic';
import displayEpic from '../modules/admin/display/display.epic';

const rootEpic = combineEpics(
  authEpic,
  docsEpics,
  clientBookNumberEpic,
  queueEpic,
  roomEpic,
  clinicEpic,
  displayEpic,
);

export default rootEpic;
