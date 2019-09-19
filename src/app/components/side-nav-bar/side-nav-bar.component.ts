import { Component, OnInit } from '@angular/core';
import { UserNavBarService } from 'src/app/services/user-nav-bar-service.service';
import { WidthHandler } from '../../services/nav-bar-width-handler.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  public navBarStatus: Boolean = false;


  public widthHandler: WidthHandler;
  constructor() {
    this.widthHandler = new WidthHandler("userNavBarMenuCard", false, 0, 1000, 2);
  }

  ngOnInit() {
  }

  openUserNavBar() {
    this.widthHandler.show();
  }


  closeUserNavBar() {
    this.widthHandler.hide();
  }





}


