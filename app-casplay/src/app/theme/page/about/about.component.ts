import { Component, OnInit } from '@angular/core';
import { get } from "scriptjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    get("../assets/js/main.js", () => {
      //Google Maps library has been loaded...
      console.log("cargado");
    });
  }

}
