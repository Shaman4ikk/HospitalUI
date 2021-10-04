import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {DoctorComponent} from "./doctorPage/doctor.component";
import {MedicineComponent} from "./medicinePage/medicine.component";
import {PatientInfoComponent} from "./patientInfoPage/patientInfo.component";
import {PatientComponent} from "./patientPage/patient.component";
import {HttpClientModule} from "@angular/common/http";
import {Service} from "./services/Service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {DoctorDialogComponent} from "./doctorPage/doctorModal/doctorDialog.component";
import {MatInputModule} from "@angular/material/input";
import {MedicineDialogComponent} from "./medicinePage/medicineModal/medicineDialog.component";
import {MatSelectModule} from "@angular/material/select";
import {PatientDialogComponent} from "./patientPage/patientModal/patientDialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "./classes/User";

const appRoutes: Routes = [
  {path: 'doctor', component: DoctorComponent},
  {path: 'medicine', component: MedicineComponent},
  {path: 'patientInfo', component: PatientInfoComponent},
  {path: 'patient', component: PatientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    MedicineComponent,
    PatientInfoComponent,
    PatientComponent,
    DoctorDialogComponent,
    MedicineDialogComponent,
    PatientDialogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [HttpClientModule, Service, MatDialogModule, FormBuilder, MatSnackBar, User],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
