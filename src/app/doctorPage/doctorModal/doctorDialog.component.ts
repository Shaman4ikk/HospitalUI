import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Doctor} from "../../classes/Doctor";
import {Service} from "../../services/Service";


@Component({
  selector: 'doctor-dialog',
  templateUrl: 'doctorDialog.html',
  styleUrls: ['../doctor.component.css']
})
export class DoctorDialogComponent {

  form: FormGroup;
  //@ts-ignore
  doctor: Doctor;

  constructor(
    public dialogRef: MatDialogRef<DoctorDialogComponent>, private fb: FormBuilder, private service: Service) {
    this.form = this.fb.group({
      firstName: [],
      lastName: []
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){
    this.doctor = this.form.value;
    this.service.createDoctor(this.doctor);
    this.dialogRef.close();
  }

}
