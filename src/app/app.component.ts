import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'projectLearnss';
  showHideSideBar : boolean = false;
constructor(private appservice : AppService, private router : Router) {
}

  ngOnInit(){
if(!this.appservice.authenticated){
this.router.navigateByUrl('/login');
}else {
  this.router.navigateByUrl('/home');
}
  }
}
