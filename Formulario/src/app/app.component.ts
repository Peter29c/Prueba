import { Component, OnInit } from '@angular/core';
import { SaveService } from './save.service';
import { ListService } from './list.service';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registerUserData = {};
  users = [];
/*   name: string;
  email: string;
  number: string; */

  title = 'Formulario';

  constructor(
    private saveService: SaveService,
    private listService: ListService
  ) {}

  ngOnInit() {
    this.showList();
  }

  // Mostrar Lista
  showList() {
    // this.users = [];
    this.listService.getUsers().subscribe(
      res => this.users = res,
      err => console.log('Error: ' + err)
    );
  }

  // Guardar Usuario
  registerUser() {
    this.saveService.saveUser(this.registerUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    console.log(this.users);
    /* this.name = '';
    this.email = '';
    this.number = ''; */
    this.showList();

    /* this.users = [];
    this.listService.getUsers().subscribe(
      res => this.users = res,
      err => console.log('Error: ' + err)
    ); */
    //console.log(this.registerUserData);
  }

  // Borrar Usuario
  deleteUser(id) {
    const response = confirm('Estas seguro de eliminar?');
    if (response) {
      const users = this.users;
      this.listService.deleteUser(id).subscribe(
        data => {
          /* for (let i = 0; i < Object.keys(users).length; i++) {
            // this.users.push(users[i]);
            if (users[i]._id === id) {
              users.splice(i, 1);
              console.log(users);
            }
          } */
          console.log(data);
        });
    }
    console.log(id);
    this.showList();
    // console.log(this.listService.deleteUser(id));
  }

}
