import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  constructor( private authService: AuthService, private route: Router ) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
