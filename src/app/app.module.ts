import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColleagueComponent } from './colleague/colleague.component';
import { AddClientComponent } from './add-client/add-client.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { Comp01Component } from './demoobs/comp01/comp01.component';
import { Comp02Component } from './demoobs/comp02/comp02.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './demohttp/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ColleagueComponent,
    AddClientComponent,
    Comp01Component,
    Comp02Component,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    WelcomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
