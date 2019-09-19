import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openUserNavBar() {

    let userNavBarMenuCard = document.getElementById("userNavBarMenuCard");
    let container = userNavBarMenuCard.parentElement;
    let parentWidth = container.clientWidth;

    let UserNavBarArrows = document.getElementById("UserNavBarArrows");
    let UserNavBarArrowsWidth = UserNavBarArrows.clientWidth;
    userNavBarMenuCard.style.width = `${parentWidth -  UserNavBarArrowsWidth}px`;

    let btnCloseUserNavBar = document.getElementById("btnCloseUserNavBar");
    let btnOpenUserNavBar = document.getElementById("btnOpenUserNavBar");
    btnOpenUserNavBar.style.display = "none";
    btnCloseUserNavBar.style.display = "block";

  }

  closeUserNavBar() {
    let userNavBarMenuCard = document.getElementById("userNavBarMenuCard");
    let container = userNavBarMenuCard.parentElement;
    let parentWidth = container.clientWidth;

    let UserNavBarArrows = document.getElementById("UserNavBarArrows");
    let UserNavBarArrowsWidth = UserNavBarArrows.clientWidth;
    userNavBarMenuCard.style.width = `${UserNavBarArrowsWidth}px`;


    let btnCloseUserNavBar = document.getElementById("btnCloseUserNavBar");
    let btnOpenUserNavBar = document.getElementById("btnOpenUserNavBar");
    btnOpenUserNavBar.style.display = "block";
    btnCloseUserNavBar.style.display = "none";
  }






}
