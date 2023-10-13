import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  showSideBar: boolean = false;

  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  afficherSideBar(){
    console.log("je suis laaaaaaaaa")
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }

  logout(){
    this.appService.logout({
      callback: () => {

        this.router.navigateByUrl('/login');

      }
    });
  }
}
