import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   nUsuario: any; //variable que permite almacenar cualquier valor

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) { 
        this.nUsuario = this.router.getCurrentNavigation().extras.state.usuario; 
        console.log(this.nUsuario) 
      }else{this.router.navigate(["/login"])} 
    });
  }

}
