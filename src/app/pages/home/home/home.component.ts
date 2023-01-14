import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _authSer:AuthService) { }

  ngOnInit(): void {
     console.log(this._authSer.isLoggdIn$.value)
  }

}
