import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  private saveUrl = "http://localhost:9000/api/save";

  constructor(
    private http: HttpClient
  ) { }

  // PETICIÓN AL SERVIDOR PARA GUARDAR
  saveUser(user) {
    return this.http.post<any>(this.saveUrl, user);
  }
}
