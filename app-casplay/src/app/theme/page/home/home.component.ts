import { Component, OnInit } from "@angular/core";
import { get } from "scriptjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    get("../assets/js/main.js", () => {
      //Google Maps library has been loaded...
      console.log("cargado");
    });
  }
}
