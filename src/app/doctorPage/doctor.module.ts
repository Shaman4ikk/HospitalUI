import {NgModule} from '@angular/core';

import {DialogOverviewExampleDialog, DoctorComponent} from './doctor.component';
import {CommonModule} from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [DoctorComponent]
})
export class DoctorModule{}
