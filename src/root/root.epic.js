import { combineEpics } from "redux-observable";
import authEpic from "../modules/auth/auth.epic";
// import clientEpic from "../modules/client/client.epic";
import adminClinicEpic from "../modules/adminClinic/adminClinc.epic";
import clientBookNumberEpic from '../modules/clientBookNumber/clientBookNumber.epic';

import queueEpic from '../modules/admin/queue/queue.epic';
import roomEpic from '../modules/admin/rooms/rooms.epic';
import docsEpics from "../modules/admin/doctors/doctors.epic";
import clinicEpic from "../modules/admin/clinic/clinic.epic"
const rootEpic = combineEpics(
  authEpic,
  // clientEpic,
  adminClinicEpic,
  docsEpics,
  clientBookNumberEpic,
  queueEpic,
  roomEpic,
  clinicEpic
);

export default rootEpic;
