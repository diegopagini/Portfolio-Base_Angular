import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, RouterModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
