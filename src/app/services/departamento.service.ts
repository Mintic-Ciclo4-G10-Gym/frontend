import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departamento } from '../models/departamento.model';

const baseURL = environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  get headers(){
    return { headers: { 'Access-Control-Allow-Origin': '*'}}
  }

  listar(){
    return this.http.get<Departamento[]>(`${baseURL}/departamento`, this.headers);
  }

  guardar(data:Departamento){
    return this.http.post(`${baseURL}/departamento`, data)
  }
}
