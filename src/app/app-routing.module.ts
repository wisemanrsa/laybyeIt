import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemsDisplayComponent } from "./componets/items-display/items-display.component";
import { ItemComponent } from "./componets/item/item.component";
import { ItemsManagerComponent } from "./componets/items-manager/items-manager.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "items",
    pathMatch: "full"
  },
  {
    path: "items",
    component: ItemsManagerComponent
  },
  {
    path: "item",
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
