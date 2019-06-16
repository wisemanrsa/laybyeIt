import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./componets/navbar/navbar.component";
import { ItemsDisplayComponent } from "./componets/items-display/items-display.component";
import { ItemsService } from "./services/items.service";
import { AnimationTextComponent } from "./componets/animation-text/animation-text.component";
import { ItemComponent } from "./componets/item/item.component";
import { ItemsManagerComponent } from "./componets/items-manager/items-manager.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsDisplayComponent,
    AnimationTextComponent,
    ItemComponent,
    ItemsManagerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
