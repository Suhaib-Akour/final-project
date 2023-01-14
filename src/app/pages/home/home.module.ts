import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from 'src/app/core/components/layout/header/header.module';
import { SideNavModule } from "../../core/components/layout/side-nav/side-nav.module";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HeaderModule,
        SideNavModule
    ]
})
export class HomeModule { }
