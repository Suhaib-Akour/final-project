import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged!:boolean;
  email!:string;
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this.isLogged = this._auth.isLoggdIn$.value
  }

  isLougout(){
    this._auth.logout();
  }
}
