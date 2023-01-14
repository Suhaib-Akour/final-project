import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanLoad {
  constructor(private _authserives: AuthService, private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const isLoggedin = this._authserives.isloggedIn;
    if (!isLoggedin) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
