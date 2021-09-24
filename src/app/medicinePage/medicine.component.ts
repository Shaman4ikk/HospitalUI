import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Service} from "../services/Service";
import {MatDialog} from "@angular/material/dialog";
import {Medicine} from "../classes/Medicine";
import {MedicineDialogComponent} from "./medicineModal/medicineDialog.component";

@Component({
  selector: 'medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['../app.component.css']
})
export class MedicineComponent implements OnInit{

  public medicines: Medicine[] | undefined;
  public oldMedicine: Medicine | undefined;
  public editMedicine: Medicine | undefined;

  dataSource: MatTableDataSource<Medicine> = new MatTableDataSource<Medicine>();

  displayedColumns: string[] = ['id', 'medicineName', 'edit'];

  constructor(private service: Service, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getMedicines().subscribe(data => {
      this.medicines = data;
      this.dataSource = new MatTableDataSource(this.medicines);
    });
  }

  edit(position: number, medicine : Medicine){
    this.oldMedicine = medicine;
    this.editMedicine = medicine;
    return medicine.editing = true;
  }

  save(position: number, medicine : Medicine){
    this.service.updateMedicine(medicine).subscribe(() => this.ngOnInit())
    return medicine.editing = false;
  }

  cancel(position: number){
    // @ts-ignore
    this.medicines[position] = this.oldMedicine;
    // @ts-ignore
    return this.medicines[position].editing = false;
  }

  delete(medicine: Medicine) {
    this.service.deleteMedicine(medicine).subscribe(() => {
      this.ngOnInit();
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MedicineDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }


}
