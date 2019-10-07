import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { UserData } from 'src/app/api/userApi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-month-destinations',
  templateUrl: './month-destinations.component.html',
  styleUrls: ['./month-destinations.component.scss']
})
export class MonthDestinationsComponent implements OnInit {
  public guiderList;

  constructor(
    public apiService: ApiService,
    public router: Router) { }


    @Input() guidersList;


  ngOnInit() {
    this.getAllGuiders()

  }
  getAllGuiders() {
    this.apiService.getAllGuiders().subscribe(data =>{
      this.guidersList = data;
      console.log("guiderlist",this.guidersList);
    });
  }

}
