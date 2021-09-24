import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Service} from "../services/Service";
import {Patient} from "../classes/Patient";
import {PatientDialogComponent} from "./patientModal/patientDialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Medicine} from "../classes/Medicine";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['../app.component.css']
})
export class PatientComponent {
  public patients: Patient[] | undefined;
  public oldPatient: Patient | undefined;
  public editPatient: Patient | undefined;
  public medicineList: Medicine[] | undefined;
  public toppings = new FormControl();
  public selected: Medicine[] | undefined;


  dataSource: MatTableDataSource<Patient> = new MatTableDataSource<Patient>();

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'medicine', 'doctor', 'patientInfo', 'edit'];

  constructor(private service: Service,public dialog: MatDialog) {}

  ngOnInit(): void {

    this.service.getPatients().subscribe(data => {
      this.patients = data;
      this.dataSource = new MatTableDataSource(this.patients);
    });

    this.service.getMedicines().subscribe(data => {
      this.medicineList = data;
    });
  }


  edit(patient : Patient){
    // @ts-ignore
    this.selected = this.medicineList.filter((item, i) => i % 2 === 0);
    this.oldPatient = patient;
    this.editPatient = patient;
    return patient.editing = true;
  }

  save(patient : Patient){
    this.service.updatePatient(patient).subscribe(() => this.ngOnInit());
    return patient.editing = false;
  }

  cancel(position: number){
    // @ts-ignore
    this.patients[position] = this.oldPatient;
    // @ts-ignore
    return this.patients[position].editing = false;
  }

  delete(patient: Patient) {
    this.service.deletePatient(patient).subscribe(() => {
      this.ngOnInit();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PatientDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

}
