import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Service} from "../services/Service";
import {PatientInfo} from "../classes/PatientInfo";

@Component({
  selector: 'patientInfo',
  templateUrl: './patientInfo.component.html',
  styleUrls: ['../app.component.css']
})
export class PatientInfoComponent {
  public patientInfos: PatientInfo[] | undefined;
  public oldPatientInfo: PatientInfo | undefined;
  public editPatientInfo: PatientInfo | undefined;

  dataSource: MatTableDataSource<PatientInfo> = new MatTableDataSource<PatientInfo>();

  displayedColumns: string[] = ['id', 'info', 'edit'];

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service.getPatientInfos().subscribe(data => {
      this.patientInfos = data;
      this.dataSource = new MatTableDataSource(this.patientInfos);
    });
  }

  edit(position: number, patientInfo : PatientInfo){
    this.oldPatientInfo = patientInfo;
    this.editPatientInfo = patientInfo;
    return patientInfo.editing = true;
  }

  save(position: number, patientInfo : PatientInfo){
    this.service.updatePatientInfo(patientInfo).subscribe(() => this.ngOnInit())
    return patientInfo.editing = false;
  }

  cancel(position: number){
    // @ts-ignore
    this.patientInfos[position] = this.oldPatientInfo;
    // @ts-ignore
    return this.patientInfos[position].editing = false;
  }

  delete(patientInfo: PatientInfo) {
    this.service.deletePatientInfo(patientInfo).subscribe(() => {
      this.ngOnInit();
    });
  }
}
