import { Component, OnInit } from "@angular/core";
import { get } from "scriptjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app-casplay";

  options = {
    min: 8,
    max: 100,
    ease: 'linear',
    speed: 200,
    trickleSpeed: 300,
    meteor: true,
    spinner: true,
    spinnerPosition: 'right',
    direction: 'ltr+',
    color: '#b50a13',
    thick: true
  };

  startedClass = false;
  completedClass = false;
  preventAbuse = false;

  constructor() {}

  ngOnInit() {
    get("../assets/js/main.js", () => {
      //Google Maps library has been loaded...
      console.log("cargado");
    });
  }

  onStarted() {
    this.startedClass = true;
    setTimeout(() => {
      this.startedClass = false;
    }, 800);
  }

  onCompleted() {
    this.completedClass = true;
    setTimeout(() => {
      this.completedClass = false;
    }, 800);
  }
}
