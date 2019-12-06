import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  thought = "";
  thoughts: String[] = [];
  dates: String[] = [];
  months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ];

  constructor() {}

  ngOnInit() {}

  onThoughtCreate() {
    if (this.thought !== "") {
      this.thoughts.push(this.thought);
      this.createDate();
    }
  }

  createDate() {
    let date = new Date();
    let datefixed = `${date.getDate()}. ${
      this.months[date.getMonth()]
    }  ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    this.dates.push(datefixed);
  }

  checkEnter(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.onThoughtCreate();
    }
  }
  deleteItem(index) {
    this.thoughts.splice(index, 1);
    this.dates.splice(index,1);
  }
}
