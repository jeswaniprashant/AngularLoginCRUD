import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor( private authService: AuthService, private route: Router ) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.loginUser(this.loginUserData)
    .subscribe( res => {
      console.log(this.loginUserData);
      console.log(res);
      localStorage.setItem('token', res.token);
      this.route.navigate(['/list']);
    }, err => {
      console.log(err);
    });
  }

}
