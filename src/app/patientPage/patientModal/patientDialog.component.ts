import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Service} from "../../services/Service";
import {Medicine} from "../../classes/Medicine";
import {Doctor} from "../../classes/Doctor";
import {PatientInfo} from "../../classes/PatientInfo";


@Component({
  selector: 'patient-dialog',
  templateUrl: 'patientDialog.html',
})
export class PatientDialogComponent {

  form: FormGroup;
  //@ts-ignore
  patient: Patient;
  medicineList: Medicine[] | undefined;
  doctors: Doctor[] | undefined;
  patientInfo: PatientInfo | undefined;

  constructor(
    public dialogRef: MatDialogRef<PatientDialogComponent>, private fb: FormBuilder, private service: Service) {

    service.getMedicines().subscribe(data => {
      this.medicineList = data;
    });
    service.getDoctor().subscribe(data => {
      this.doctors = data;
    });

    this.form = this.fb.group({
      firstName: [],
      lastName: [],
      doctor: [],
      medicine: [],
      patientInfo: []
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){
    console.log(JSON.stringify(this.form.value));
    this.form.patchValue({
      patientInfo: {
        info: this.form.get('patientInfo')?.value
      }
    });
    this.patient = this.form.value;
    console.log(JSON.stringify(this.form.value));
    this.service.createPatient(this.patient);
    this.dialogRef.close();
  }

}
