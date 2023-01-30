import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashborderRoutingModule } from './dashborder-routing.module';
import { DashborderComponent } from './dashborder/dashborder.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UpdateStartupComponent } from './dashborder/update-startup/update-startup/update-startup.component';
const MatImports = [
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    DashborderComponent,
    UpdateStartupComponent
  ],
  imports: [
    CommonModule,
    DashborderRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ...MatImports
  ]
})
export class DashborderModule { }
