import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading=true;
  constructor(private _authSer:AuthService,private router:Router) { }

  ngOnInit(): void {
     console.log(this._authSer.isLoggdIn$.value)
  }
  tosector(){
    this.router.navigate(['/sectors/all-sectors'])
  }
}
