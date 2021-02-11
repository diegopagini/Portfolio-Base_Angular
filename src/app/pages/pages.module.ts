import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './product/product.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AboutModule } from './about/about.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductModule,
    PortfolioModule,
    AboutModule,
    RouterModule,
  ],
  exports: [ProductModule, AboutModule, PortfolioModule],
})
export class PagesModule {}
