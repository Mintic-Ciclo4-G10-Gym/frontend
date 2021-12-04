import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Municipio } from '../models/municipio.model';

const baseURL = environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  get headers(){
    return { headers: { 'Access-Control-Allow-Origin': '*'}}
  }

  listar(){
    return this.http.get<Municipio[]>(`${baseURL}/municipio`, this.headers);
  }

  guardar(data:Municipio){
    return this.http.post(`${baseURL}/municipio`, data)
  }

}
