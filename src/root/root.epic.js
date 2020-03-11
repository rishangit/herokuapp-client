import { combineEpics } from "redux-observable";
import authEpic from "../modules/auth/auth.epic";
import clientEpic from "../modules/client/client.epic";
import adminClinicEpic from "../modules/adminClinic/adminClinc.epic";
import adminDocEpic from "../modules/adminDoctors/adminDoctors.epic";
import clientBookNumberEpic from '../modules/clientBookNumber/clientBookNumber.epic'
const rootEpic = combineEpics(
  authEpic,
  clientEpic,
  adminClinicEpic,
  adminDocEpic,
  clientBookNumberEpic
);

export default rootEpic;
