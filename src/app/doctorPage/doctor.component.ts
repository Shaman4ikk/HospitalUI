import {Component, OnInit} from '@angular/core';
import {Doctor} from "../classes/Doctor";
import {Service} from "../services/Service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DoctorDialogComponent} from "./doctorModal/doctorDialog.component";

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

  constructor(private service: Service, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getDoctor().subscribe(data => {
      this.doctors = data;
      this.dataSource = new MatTableDataSource(this.doctors);
    });
  }

  edit(position: number, doctor : Doctor){
    this.oldDoctor = doctor;
    this.editDoctor = doctor;
    return doctor.editing = true;
  }

  save(position: number, doctor : Doctor){
    this.service.updateDoctor(doctor).subscribe(() => this.ngOnInit())
    return doctor.editing = false;
  }

  cancel(position: number){
    // @ts-ignore
    this.doctors[position] = this.oldDoctor;
    // @ts-ignore
    return this.doctors[position].editing = false;
  }

  delete(doctor: Doctor) {
    this.service.deleteDoctor(doctor).subscribe(() => {
      this.ngOnInit();
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DoctorDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

}
