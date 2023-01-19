import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupRoutingModule } from './startup-routing.module';
import { StartupComponent } from './startup/startup.component';
import { HeaderModule } from "../../core/components/layout/header/header.module";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
    declarations: [
        StartupComponent
    ],
    imports: [
        CommonModule,
        StartupRoutingModule,
        HeaderModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatFormFieldModule
    ]
})
export class StartupModule { }
