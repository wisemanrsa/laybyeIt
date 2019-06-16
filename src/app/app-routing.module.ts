import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemsComponent } from "./componets/items/items.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "items",
    pathMatch: "full"
  },
  {
    path: "items",
    component: ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
