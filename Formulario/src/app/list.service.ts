import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private listUrl = "http://localhost:9000/api/list";
  private deleteUrl = "http://localhost:9000/api/list/";
  private updateUrl = "http://localhost:9000/api/list/";

  constructor(
    private http: HttpClient
  ) { }

  //PETICIÓN PARA MOSTRAR LOS REGISTROS
  getUsers() {
    return this.http.get<any>(this.listUrl);
  }

  // PETICIÓN PARA ELIMINAR UN REGISTRO
  deleteUser(id) {
    // return this.http.delete(`http://localhost:9000/api/list/${id}`).map(res => res);
    return this.http.delete<any>(this.deleteUrl + id);
  }

  // PETICIÓN PARA ACTUALIZAR UN REGISTRO
  /* updateUser(id) {
    return this.http.put<any>(this.updateUrl + id);
  } */

}
