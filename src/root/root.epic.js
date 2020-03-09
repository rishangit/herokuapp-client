import { combineEpics } from "redux-observable";
import authEpic from "../modules/auth/auth.epic";
import clientEpic from "../modules/client/client.epic";
import adminClinicEpic from "../modules/adminClinic/adminClinc.epic";
import acminDocEpic from "../modules/adminDoctors/adminDoctors.epic";

const rootEpic = combineEpics(
  authEpic,
  clientEpic,
  adminClinicEpic,
  acminDocEpic
);

export default rootEpic;
