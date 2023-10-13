import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {ProduitComponent} from "./produit/produit.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProduitResolver} from "./produit/produit.resolver";
import {LoginComponent} from "./login/login.component";
import{HomeComponent} from "./home/home.component";

export const appRoutes : Routes = [  {  path: '',  redirectTo: '/home',  pathMatch: 'full' },
  {  path: 'login',  component: LoginComponent},
  {
    path: 'product', component: ProduitComponent,


  },
  {  path: 'home',   component: HomeComponent,

  },


  { path: 'dashboard',  component: DashboardComponent },


];


@NgModule({
imports :[
  [FormsModule,ReactiveFormsModule ],
  RouterModule.forRoot(
    appRoutes,{
      enableTracing : true
    }
  )],
  exports : [RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule{

}
