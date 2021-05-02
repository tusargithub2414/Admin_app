import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule } from '@angular/common/http';
import { GrandChildrenComponent } from './grand-children/grand-children.component'
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    GrandChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
