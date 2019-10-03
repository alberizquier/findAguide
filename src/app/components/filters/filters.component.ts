import { Component, OnInit, Input } from '@angular/core';
import { constructor } from 'q';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() place;

  destination: string;

  constructor() { 
    
  }

  ngOnInit() {

  }
}
