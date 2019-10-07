import { Component, OnInit, Input, ViewChild, Output, OnChanges } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-guider-list',
  templateUrl: './guider-list.component.html',
  styleUrls: ['./guider-list.component.scss']
})
export class GuiderListComponent implements OnInit,OnChanges {



  constructor(
    public apiService: ApiService,
    public router: Router
  ) { }

  public rating = document.querySelector('#rating');
  public guiderRating = document.querySelector('#guiderRating');

  @Input() guiderList;

  ngOnInit() {

  }


  ngOnChanges() {
    console.log("GuiderList", this.guiderList)
  }

}

