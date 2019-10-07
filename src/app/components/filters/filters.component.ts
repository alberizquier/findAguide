import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public router: Router,
    //
    ){ }

    @Input() userLoc = { location : '', language : ['']};
    public guidersList;
    public elements = false;
  ngOnInit() {

  }
public madrid = 'Madrid';

  filterByLocation() {
    this.apiService.findByLocation(this.userLoc.location).subscribe(data => {
      if (data.length > 0) {
        this.guidersList = data;
        this.elements = true;
      }else{
        this.elements = false;
      }
    });
    }


    filterByLanguageAndLocation(user) {
      this.apiService.findByLanguageAndLocation(this.userLoc.location,this.userLoc.language).subscribe(data =>{
        console.log(data);
      });
    }


}
