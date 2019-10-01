import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  tittle = 'Users';
  mode: any;
  type;
  constructor() { }

  //public = document.getElementById("password");

  ngOnInit() {
    this.type = 'password';
  }

  showPass() {
    console.log(this.type)
    if (this.type == "password") {
      this.type = "text";
    } else {
      this.type = "password";
    }
  }

}
