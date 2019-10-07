import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {
  tittle = 'Users';
  mode: any;
  type;

  constructor(
    public apiService: ApiService,
    public router: Router) { }

  @Input() user = { name: '', lastName: '', email: '', password: '', birthDate : Date};



  public pass = document.getElementById("password");

  ngOnInit() {
    this.type = 'password';
  }
 newUser(user) {
   this.apiService.createUser(this.user).subscribe();
   }

showPass() {
    if (this.type == 'password') {
      this.type = 'text';
    }
     else {
      this.type = 'password';
    }
  }

}




