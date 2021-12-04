import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const baseURL = environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioId: string = '';

  constructor(private http: HttpClient) { }

  get headers(){
    return { headers: { 'Access-Control-Allow-Origin': '*'}}
  }

  ingresar(datoUsuario:any): Observable<any>{
    return this.http.post(`${baseURL}/usuario/ingreso`, datoUsuario, this.headers)
  }

  setUsuarioId(id:string){
    this.usuarioId = id;
  }

  getUsuarioId() {
    return this.usuarioId;
  }

}
