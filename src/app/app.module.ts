import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import{HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppComponent } from './app.component';
import {CookieService} from "ngx-cookie-service";
import {ProduitService} from "./produit/ProduitService";
import { ProduitComponent } from './produit/produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./routing.module";
import{ProduitServices} from "./produit/produit.service";
import {HomeComponent} from "./home/home.component";
import {AppService} from "./app.service";
import{LoginComponent} from "./login/login.component";
import {XhrInterceptor} from "./xhr.interceptor";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent


  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, HttpClientModule, [FormsModule, ReactiveFormsModule]

  ],
  providers: [ProduitService, ProduitServices,CookieService, AppService, {provide : HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true}]
})
export class AppModule { }
