import { Component, OnInit } from "@angular/core";
import { ItemsService } from "src/app/services/items.service";
import { Item } from "src/app/models/item.interface";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  text = "These Are Your Today's Top Hot Picks.Today Only.";
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService
      .getTodaysTopItems()
      .subscribe(items => (this.items = items || []));
  }
}
