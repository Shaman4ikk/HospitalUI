import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {DoctorComponent} from "./doctorPage/doctor.component";

const appRoutes: Routes = [
  {path: 'doctor', loadChildren: () => import('./doctorPage/doctor.module').then(m => m.DoctorModule)},
];

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
