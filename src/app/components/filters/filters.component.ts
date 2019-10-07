import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public router: Router,
    public route: ActivatedRoute
    //
    ){ }

    @Input() userLoc = { location : '', language : ['']};
    public guidersList;
    public guiderId;
    public elements = false;
  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {console.log(paramMap.keys);this.userLoc.location = paramMap.get('dest');
      this.filterByLocation();console.log(this.userLoc.location );}


    );
  }


  filterByLocation() {
    this.apiService.findByLocation(this.userLoc.location).subscribe(data => {
      if (data.length > 0) {
        this.guidersList = data;
        this.elements = true;
console.log(this.guidersList[0].guiderInfo._id)
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
