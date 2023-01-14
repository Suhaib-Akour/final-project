import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLoggedIn$!: Observable<boolean>;
  constructor(private _authService: AuthService, private router:Router) {}
  ngOnInit(): void {
    this.isLoggedIn$ = this._authService.isLoggdIn$;

  }
}
