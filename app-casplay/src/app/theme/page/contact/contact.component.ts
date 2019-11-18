import { Component, OnInit } from '@angular/core';
import { get } from "scriptjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    get("../assets/js/main.js", () => {
      //Google Maps library has been loaded...
      console.log("cargado");
    });
  }

}
