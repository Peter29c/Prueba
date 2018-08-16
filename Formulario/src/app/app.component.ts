import { Component, OnInit } from '@angular/core';
import { SaveService } from './save.service';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registerUserData = {};

  title = 'Formulario';

  constructor( private save: SaveService ) {}

  registerUser() {
    this.save.saveUser(this.registerUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    //console.log(this.registerUserData);
  }

}
