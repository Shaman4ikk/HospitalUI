import {Component, Inject, OnInit} from '@angular/core';
import {Doctor} from "../classes/Doctor";
import {Service} from "../services/Service";
import {MatTableDataSource} from "@angular/material/table";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  public doctors: Doctor[] | undefined;
  public oldDoctor: Doctor | undefined;
  public editDoctor: Doctor | undefined;
  dataSource: MatTableDataSource<Doctor> = new MatTableDataSource<Doctor>();

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'edit'];

  constructor(private service: Service, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.service.getDoctor().subscribe(data => {
      this.doctors = data;
      this.dataSource = new MatTableDataSource(this.doctors);
      console.log(this.doctors);
    });
  }

  edit(position: number, doctor : Doctor){
    this.oldDoctor = doctor;
    this.editDoctor = doctor;
    return doctor.editing = true;
  }

  save(position: number, doctor : Doctor){
    if(this.service.updateDoctor(doctor)){
      this.ngOnInit();
    }
    return doctor.editing = false;
  }

  cancel(position: number){
    // @ts-ignore
    this.doctors[position] = this.oldDoctor;
    // @ts-ignore
    return this.doctors[position].editing = false;
  }

  delete(doctor: Doctor) {
    if(this.service.deleteDoctor(doctor)){
      this.ngOnInit();
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(result)
      console.log('The dialog was closed');
    });
  }


}
@Component({
  selector: 'doctor-dialog',
  templateUrl: 'doctorDialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Doctor) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
