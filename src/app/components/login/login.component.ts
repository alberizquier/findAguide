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

  ngOnInit() {
  }

  login() {
    this.apiService.userLogin(this.user).subscribe(data => {
      console.log(data)
      if(!data.ok){
        alert("Algo va mal")
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/main']);
      }
    },err =>{
      alert("Algo va mal")
        this.router.navigate(['/login']);
    });
  }
}
