import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {
  inicioForm!: FormGroup;

  constructor(private servicio: UsuarioService, private fb: FormBuilder, private router: Router) { 
    this.servicio = servicio;
  }

  ngOnInit(): void {
    this.inicioForm=this.fb.group({
      nombre: [''],
      clave: ['']
    })
  }

  entrar(){
    this.servicio.ingresar(this.inicioForm.value).subscribe(data => {
      sessionStorage.setItem('usuarioId', data.id);
      this.router.navigate(['/inicio']);
    })
 }

}

