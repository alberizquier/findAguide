import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { UserNavBarService } from 'src/app/services/user-nav-bar.service';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
 selector: 'app-side-nav-bar',
 templateUrl: './side-nav-bar.component.html',
 styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements DoCheck {
 public navBarStatus: Boolean = false;
 public localStorageUserData : Object;
 constructor(
   public apiService: ApiService,
   public router: Router,
   public route: ActivatedRoute
   //
   ){ }
   @Input() userData;
   public width: number;
   public userName;
   public name;
   public userRating;
   public rating;
   public userPicture;
   public picture;
 ngDoCheck() {
  this.localStorageUserData = localStorage.getItem('this.userData');
  this.userName = JSON.parse(this.localStorageUserData);
  this.name=this.userName[0].name;
  this.userRating = JSON.parse(this.localStorageUserData);
  this.rating=this.userRating[0].rating;
  this.userPicture = JSON.parse(this.localStorageUserData);
  this.picture=this.userPicture[0].picture;
 }
}


