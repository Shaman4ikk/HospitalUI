import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {DialogOverviewExampleDialog, DoctorComponent} from "./doctorPage/doctor.component";
import {MedicineComponent} from "./medicinePage/medicine.component";
import {PatientInfoComponent} from "./patientInfoPage/patientInfo.component";
import {PatientComponent} from "./patientPage/patient.component";
import {HttpClientModule} from "@angular/common/http";
import {Service} from "./services/Service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

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
    PatientComponent
  ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule
    ],
  providers: [HttpClientModule, Service, MatDialogModule],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
