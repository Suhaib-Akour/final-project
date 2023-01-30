import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Startup } from 'src/app/core/interfaces/startups';
import { AuthService } from 'src/app/core/services/auth.service';
import { StartupsService } from 'src/app/core/services/startups.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading=true;
  listOfStartups :Startup[] = [];
  totalcompany!:number;
  constructor(private _authSer:AuthService,private router:Router,private _startupService:StartupsService) { }

  ngOnInit(): void {
    this.getAll();
     console.log(this._authSer.isLoggdIn$.value)
  }
  tosector(){
    this.router.navigate(['/sectors/all-sectors'])
  }

  getAll() {
    this._startupService.getAll().subscribe((result: any) => {
      if (result) {
        this.listOfStartups = result;
        this.loading = false;
        this.totalcompany = this.listOfStartups.length;
      }
    });
  }
}
