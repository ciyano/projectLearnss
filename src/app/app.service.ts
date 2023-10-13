import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import{API_URLS} from "./config/api.url.config";
import{CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AppService {
authenticated:boolean=false;
  credentials = {
    username: '',
    password: ''
  };

  constructor(private https :HttpClient, private cookie : CookieService) { }
  private callback : string;
  authenticate({credentials, callback}: { credentials: any, callback: any } ) {

    if (credentials) {
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookie.set('token', token);


      this.https.get(API_URLS.USER_URL).subscribe(response => {
        // @ts-ignore
        if (response && response['name']) {
          // @ts-ignore
          this.authenticate = true;
        } else { // @ts-ignore

          this.authenticate = false;
        }
        return callback && callback();
      });
    }



  }
  logout({callback}: { callback: any }){
    this.authenticated = false;
    return callback && callback();
  }

}
