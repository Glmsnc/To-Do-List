import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/items-list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
