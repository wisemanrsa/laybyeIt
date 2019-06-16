import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./componets/navbar/navbar.component";
import { ItemsComponent } from "./componets/items/items.component";
import { ItemsService } from "./services/items.service";
import { AnimationTextComponent } from './componets/animation-text/animation-text.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ItemsComponent, AnimationTextComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
