import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterModule } from './register/register.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BgImgComponent } from './bg-img/bg-img.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BgImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
