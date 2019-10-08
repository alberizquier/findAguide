import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.scss']
})
export class NewBudgetComponent implements OnInit {

  tour1: Boolean = false;
  tour2: Boolean = false;
  tour3: Boolean = false;
  tour4: Boolean = false;
  xp1: Boolean = false;
  xp2: Boolean = false;
  xp3: Boolean = false;
  xp4: Boolean = false;

  constructor() { }

  ngOnInit() {
  }


  add() {

  }

}
