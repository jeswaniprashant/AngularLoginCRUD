import { AutoLogoutService } from './auto-logout.service';
import { Accounts } from './accounts.model';
import { async } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { UserIdleService } from 'angular-user-idle';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit, Injectable, HostListener, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor( private authService: AuthService, private userIdle: UserIdleService,
               private router: Router, private route: ActivatedRoute, private autoLogoutService: AutoLogoutService  ) {}
}
