import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NavService } from 'src/app/core/services/nav.service';
import { delay } from 'rxjs';
import { NavMenuDto } from 'src/app/core/dto/nav-menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;
  navServiceList!: NavMenuDto;
  loading = false;
  constructor(
    private _authService: AuthService,
    private router:Router,
    private breakpoint: BreakpointObserver,
    private _sideNav: NavService,
  ) {
    this.navServiceList = this._sideNav.getNavMenu();
  }
  ngAfterViewInit(): void {
    this.breakpoint
      .observe(['(max-width:750px)'])
      .pipe(delay(1))
      .subscribe((value: BreakpointState) => {
        if (value.matches) {
          this.sideNav.mode = 'over';
          this.sideNav.close();
        } else {
          this.sideNav.mode = 'side';
          this.sideNav.open();
        }
      });
  }

  ngOnInit(): void { console.log(this.router.url)}
  isLougout() {
    this._authService.logout();
  }

  clickToSmall() {
    if (this.sideNav.mode === 'over') {
      this.sideNav.close();
    }
  }
}
