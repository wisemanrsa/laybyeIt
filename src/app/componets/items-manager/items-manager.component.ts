import { Component, OnInit } from "@angular/core";
import { Item } from "src/app/models/item.interface";
import { ItemsService } from "src/app/services/items.service";

@Component({
  selector: "app-items-manager",
  templateUrl: "./items-manager.component.html",
  styleUrls: ["./items-manager.component.scss"]
})
export class ItemsManagerComponent implements OnInit {
  items: Item[] = [];
  displayItem = false;
  selectedItem: Item = {};

  constructor(private itemsService: ItemsService) {
    this.displayItem = false;
    console.log(this.displayItem);
  }

  ngOnInit() {
    this.displayItem = false;
    this.itemsService
      .getTodaysTopItems()
      .subscribe(items => (this.items = items || []));
  }

  handleSeletedItem(item: Item) {
    console.log(item);
    this.displayItem = true;
    this.selectedItem = item;
  }

  handleResetSelected(reset: boolean) {
    this.displayItem = reset;
    this.selectedItem = {};
  }
}
