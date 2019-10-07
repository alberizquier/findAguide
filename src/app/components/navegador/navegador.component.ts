import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
  show = true;
  place: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(this.show)
  }

  destination() {
    //this.show = false;
    console.log('hola');
    this.router.navigate(['/filters', {dest:this.place}]);
  }


}
