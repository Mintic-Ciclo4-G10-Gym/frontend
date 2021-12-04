import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private router: Router) {
    if(sessionStorage.getItem('usuarioId') != '' && sessionStorage.getItem('usuarioId') != null){
      this.mostrarMenu = true;
    }else{
      this.router.navigate(['']);
    }
    console.log(sessionStorage.getItem('usuarioId'));
    console.log(this.mostrarMenu);
  }

  ngOnInit(): void {
    
  }
}
