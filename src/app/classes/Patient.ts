import {Doctor} from "./Doctor";
import {Medicine} from "./Medicine";
import {PatientInfo} from "./PatientInfo";

export class Patient{
  constructor(public id:number,public doctor:Doctor, public medicine:Medicine, public patientInfo:PatientInfo) {
  }
}
