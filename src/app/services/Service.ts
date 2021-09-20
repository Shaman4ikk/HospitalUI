import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Doctor} from "../classes/Doctor";

@Injectable()
export class Service{
  private url = 'http://localhost:8080/test/doctors/';
  constructor(private httpClient: HttpClient) {
  }

  getDoctor(){
    return this.httpClient.get<Doctor[]>(this.url);
  }

  updateDoctor(doctor: Doctor){
    return this.httpClient.put<Doctor>(this.url, doctor).subscribe();
  }

  deleteDoctor(doctor: Doctor) {
    return this.httpClient.delete<Doctor>(this.url + 'id=' + doctor.id).subscribe();
  }
}
