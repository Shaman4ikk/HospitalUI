import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Doctor} from "../classes/Doctor";
import {Medicine} from "../classes/Medicine";
import {PatientInfo} from "../classes/PatientInfo";
import {Patient} from "../classes/Patient";

@Injectable()
export class Service{

  private urlDoctors = 'http://localhost:8080/test/doctors/';
  private urlMedicines = 'http://localhost:8080/test/medicines/';
  private urlPatientsInfo = 'http://localhost:8080/test/patientsInfo/';
  private urlPatients = 'http://localhost:8080/test/patients/';

  constructor(private httpClient: HttpClient) {
  }

  getDoctor(){
    return this.httpClient.get<Doctor[]>(this.urlDoctors);
  }

  updateDoctor(doctor: Doctor){
    return this.httpClient.put<Doctor>(this.urlDoctors, doctor);
  }

  deleteDoctor(doctor: Doctor) {
    return this.httpClient.delete<Doctor>(this.urlDoctors + 'id=' + doctor.id);
  }

  createDoctor(doctor: Doctor) {
    return this.httpClient.post(this.urlDoctors, doctor).subscribe();
  }

  getMedicines() {
    return this.httpClient.get<Medicine[]>(this.urlMedicines);
  }

  updateMedicine(medicine: Medicine) {
    return this.httpClient.put<Medicine>(this.urlMedicines, medicine);
  }

  deleteMedicine(medicine: Medicine) {
    return this.httpClient.delete<Medicine>(this.urlMedicines + 'id=' + medicine.id);
  }

  createMedicine(medicine: Medicine) {
    return this.httpClient.post(this.urlMedicines, medicine).subscribe();
  }

  getPatientInfos() {
    return this.httpClient.get<PatientInfo[]>(this.urlPatientsInfo);
  }
  updatePatientInfo(patientInfo: PatientInfo) {
    return this.httpClient.put<PatientInfo>(this.urlPatientsInfo, patientInfo);
  }

  deletePatientInfo(patientInfo: PatientInfo) {
    return this.httpClient.delete<PatientInfo>(this.urlPatientsInfo + 'id=' + patientInfo.id);
  }

  getPatients() {
    return this.httpClient.get<Patient[]>(this.urlPatients);
  }

  updatePatient(patient: Patient) {
    return this.httpClient.put<Patient>(this.urlPatients, patient);
  }

  deletePatient(patient: Patient) {
    return this.httpClient.delete<Patient>(this.urlPatients + 'id=' + patient.id);
  }

  createPatient(patient: Patient) {
    return this.httpClient.post(this.urlPatients, patient).subscribe();
  }
}
