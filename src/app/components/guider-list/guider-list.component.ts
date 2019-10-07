import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Router } from '@angular/router';
import { UserData } from 'src/app/api/userApi';



@Component({
  selector: 'app-guider-list',
  templateUrl: './guider-list.component.html',
  styleUrls: ['./guider-list.component.scss']
})
export class GuiderListComponent implements OnInit {
 usersList: any = [];

  constructor(
    public apiService: ApiService,
    public router: Router
  ) { }

  public rating = document.querySelector('#rating');
  public guiderRating = document.querySelector('#guiderRating');

  @Input() guiderList;

  ngOnInit() {
    //this.loadUsers();
  }

  loadUsers(){
    return this.apiService.findByLocation(location).subscribe((data : UserData) => {
      this.usersList = data.data;
      console.log(document.querySelector('#guiderRating'));
    })
  }



}
