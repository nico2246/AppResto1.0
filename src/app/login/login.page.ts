import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = ""

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ingresar(){

    let navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }  
  };
  this.router.navigate(['/'],navigationExtras);

 }
}