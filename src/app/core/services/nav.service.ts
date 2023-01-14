import { Injectable } from '@angular/core';
import { NavItemDto } from '../dto/nav-item';
import { NavMenuDto } from '../dto/nav-menu';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }
  getNavMenu(){
    return new NavMenuDto('Navmenu',[
      new NavItemDto('Home','home','','/home',[]),
      new NavItemDto('Startup','dashboard','','/startup',[]),
      new NavItemDto('Approval','home','','/approval',[]),
    ])
  }
}
