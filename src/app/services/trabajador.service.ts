import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajador } from '../model/trabajador.model';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  constructor(private http: HttpClient) {}

  public getTrabajadores() {
    return this.http.get('http://localhost:8000/trabajador');
  }

  public getTrabajador(id: any) {
    return this.http.get(`http://localhost:8000/trabajador/${id}`);
  }

  public getNumeroTrabajadores() {
    return this.http.get('http://localhost:8000/numero');
  }

  public crearTrabajador(data: Trabajador) {
    return this.http.post('http://localhost:8000/trabajador', data);
  }
}
