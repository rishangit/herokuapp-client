import { combineEpics } from 'redux-observable';
import authEpic from '../modules/auth/auth.epic';
import channellingEpic from '../modules/client/channelling/channelling.epic';

import queueEpic from '../modules/admin/queue/queue.epic';
import roomEpic from '../modules/admin/rooms/rooms.epic';
import docsEpics from '../modules/admin/doctors/doctors.epic';
import clinicEpic from '../modules/admin/clinic/clinic.epic';
import displayEpic from '../modules/admin/display/display.epic';

const rootEpic = combineEpics(
  authEpic,
  docsEpics,
  channellingEpic,
  queueEpic,
  roomEpic,
  clinicEpic,
  displayEpic,
);

export default rootEpic;
