import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  email!:string;
  header_variabel=false;

  constructor(private _auth:AuthService,private router:Router) {  }
  ngOnInit(): void {
    this.isLoggedIn$ = this._auth.isLoggdIn$
  }
  showNav = false;

  toggleNav() {
    this.showNav = !this.showNav;
  }
  isLougout(){
    this._auth.logout();
    this.router.navigate(['/app'])
  }
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
      this.header_variabel=true;
    }
    else{
      this.header_variabel=false;
    }
  }
}
