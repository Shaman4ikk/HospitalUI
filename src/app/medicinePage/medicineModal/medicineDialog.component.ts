import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Service} from "../../services/Service";
import {Medicine} from "../../classes/Medicine";


@Component({
  selector: 'medicine-dialog',
  templateUrl: 'medicineDialog.html',
  styleUrls:['../../app.component.css']
})
export class MedicineDialogComponent {

  form: FormGroup;
  //@ts-ignore
  medicine: Medicine;

  constructor(
    public dialogRef: MatDialogRef<MedicineDialogComponent>, private fb: FormBuilder, private service: Service) {
    this.form = this.fb.group({
      medicineName: []
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){
    this.medicine = this.form.value;
    this.service.createMedicine(this.medicine);
    this.dialogRef.close();
  }

}
