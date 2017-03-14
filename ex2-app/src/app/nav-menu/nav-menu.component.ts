import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

 buttons = [
              { id: "home", txt: "Home" }, 
              { id: "about", txt: "About" },     
              { id: "articles", txt: "Articles" },     
              { id: "contact", txt: "Contact Us" }
            ]
  constructor() { }

  ngOnInit() {
  }

}
