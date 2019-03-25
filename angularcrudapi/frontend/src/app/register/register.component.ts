import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControlName  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserdata = {};
  createUser: FormGroup;

  constructor( private authService: AuthService, private route: Router, private fb: FormBuilder ) { 
    this.createUser = this.fb.group({
      userName: ['', Validators.required],
      password: ''
    });
  }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.registerUserdata)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.route.navigate(['/login']);
        },
        err => console.log(err)
      );
  }

}
