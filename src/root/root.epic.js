import { combineEpics } from "redux-observable";
import authEpic from "../modules/auth/auth.epic";
import clientEpic from "../modules/client/client.epic";
import adminClinicEpic from "../modules/adminClinic/adminClinc.epic";
import clientBookNumberEpic from '../modules/clientBookNumber/clientBookNumber.epic';
import queueEpic from '../modules/queue/queue.epic';

import roomEpic from '../modules/admin/rooms/rooms.epic';
import docsEpics from "../modules/admin/doctors/doctors.epic"
const rootEpic = combineEpics(
  authEpic,
  clientEpic,
  adminClinicEpic,
  docsEpics,
  clientBookNumberEpic,
  queueEpic,
  roomEpic
);

export default rootEpic;
