import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public router: Router) { }

    @Input() user = { email: '', password: ''};
    public elements = false;
    public userData;

  ngOnInit() {
  }

  login() {
    this.apiService.userLogin(this.user).subscribe(data => {
      if(!data){
        alert("Algo va mal")
        this.router.navigate(['/login']);
      }else{
        this.apiService.getUser(this.user.email).subscribe(data =>{
          this.userData = data;
          localStorage.setItem('this.userData', JSON.stringify(this.userData));
        })
        this.router.navigate(['/main']);
      }
    },err =>{
      alert("Algo va mal")
        this.router.navigate(['/login']);
    });
  }
}
