import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ItemsService } from "src/app/services/items.service";
import { Item } from "src/app/models/item.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-items-display",
  templateUrl: "./items-display.component.html",
  styleUrls: ["./items-display.component.scss"]
})
export class ItemsDisplayComponent implements OnInit {
  @Input()
  items: Item[];

  @Output()
  selectedItem = new EventEmitter<Item>();

  text = "These Are Your Today's Top Hot Picks.Today Only.";

  constructor() {}

  ngOnInit() {}

  selectItem(item) {
    this.selectedItem.emit(item);
  }
}
