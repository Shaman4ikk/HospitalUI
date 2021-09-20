import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Service} from "./services/Service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  constructor(private router: Router, private service: Service){}

  title='startt';


}
