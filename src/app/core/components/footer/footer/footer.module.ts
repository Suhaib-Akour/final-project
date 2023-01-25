import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const MatImports = [MatToolbarModule, MatIconModule];

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, ...MatImports],
  exports: [FooterComponent],
})
export class FooterModule {}
