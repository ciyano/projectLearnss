import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AppService} from "../app.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  credentials = {
    username: '',
    password: ''
  };
  constructor(private fb: FormBuilder,
              private appService: AppService,
              private router: Router) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }
  login() {
    console.log(this.credentials.username)
    console.log(this.credentials.password)

this.appService.authenticate({
  credentials: this.credentials, callback: () => {
    this.router.navigateByUrl('/home');
  }
});
  }

}
