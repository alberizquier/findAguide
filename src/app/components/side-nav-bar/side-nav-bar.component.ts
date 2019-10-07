import { Component, OnInit } from '@angular/core';
import { UserNavBarService } from 'src/app/services/user-nav-bar.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  public navBarStatus: Boolean = false;

    public width: number;

  ngOnInit() {
  }

  open() {

  }


}


