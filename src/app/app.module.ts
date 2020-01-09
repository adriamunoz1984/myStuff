import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuControllerComponent } from './menu-controller/menu-controller.component';
import { PerpTestComponent } from './perp-test/perp-test.component';
import { AbButtonsComponent } from './ab-buttons/ab-buttons.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { GuessGameComponent } from './guess-game/guess-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuControllerComponent,
    PerpTestComponent,
    AbButtonsComponent,
    NavBar1Component,
    GuessGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
