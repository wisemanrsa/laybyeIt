import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "src/app/models/item.interface";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input()
  item: Item;

  @Output()
  resetSelected = new EventEmitter<boolean>();

  months = 1;
  contactNumber = null;
  contactName = null;

  constructor(private router: Router) {}

  ngOnInit() {}

  goHome() {
    this.resetSelected.emit(false);
  }
}
