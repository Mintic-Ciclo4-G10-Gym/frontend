import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Municipio } from 'src/app/models/municipio.model';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  public entidades: Municipio[] = [];
  titulo:string = 'Municipio';
  formulario!:FormGroup;
  mensaje: string = "";
  estado: boolean = false;

  constructor(private servicio: MunicipioService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listarEntidad();
    this.formulario = this.fb.group({
      id:['', Validators.required],
      nombre:['', Validators.required]
    })
  }

  listarEntidad(){
    this.estado = true;
    this.servicio.listar().subscribe((entidades: any)=>{
      this.entidades = entidades;
      this.estado = false;
    })
  }

  guardar(){
    this.estado = true;
    if(this.formulario.status=="INVALID"){

    }else{
      this.servicio.guardar(this.formulario.value).subscribe((respuesta: any)=>{
        this.mensaje = respuesta.mensaje;
        this.listarEntidad();
      })
    }
    this.estado = false;
  }

  editar(entidad:Municipio){
    this.formulario.controls['id'].setValue(entidad.id);
    this.formulario.controls['nombre'].setValue(entidad.nombre);
  }

  eliminar(entidad:Municipio){
  }

}
