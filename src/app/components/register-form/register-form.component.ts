import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
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
