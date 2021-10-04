import {Component} from '@angular/core';
import {Service} from "./services/Service";
import {User} from "./classes/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  public user: User | undefined;

  constructor(private service: Service){
  }

  title='Hospital UI';

  logout(){
    alert("Logout");
  }
}
