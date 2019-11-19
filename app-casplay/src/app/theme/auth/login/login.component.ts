import { Component, OnInit } from '@angular/core';
import { get } from "scriptjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    get("../assets/js/main.js", () => {
      //Google Maps library has been loaded...
      console.log("cargado");
    });
  }

}
