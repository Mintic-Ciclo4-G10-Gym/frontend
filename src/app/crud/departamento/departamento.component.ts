import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  public entidades: Departamento[] = [];
  titulo:string = 'Departamento';
  formulario!:FormGroup;
  mensaje: string = "";
  estado: boolean = false;

  constructor(private servicio: DepartamentoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listarDepartamento();
    this.formulario = this.fb.group({
      id:['', Validators.required],
      nombre:['', Validators.required]
    })
  }

  listarDepartamento(){
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
        this.listarDepartamento();
      })
    }
    this.estado = false;
  }

  editar(entidad:Departamento){
    this.formulario.controls['id'].setValue(entidad.id);
    this.formulario.controls['nombre'].setValue(entidad.nombre);
  }

  eliminar(entidad:Departamento){
  }

}
