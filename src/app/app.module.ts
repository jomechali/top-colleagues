import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColleagueComponent } from './colleague/colleague.component';
import { AddClientComponent } from './add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ColleagueComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
