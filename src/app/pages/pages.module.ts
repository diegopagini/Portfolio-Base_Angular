import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './product/product.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AboutModule } from './about/about.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [SearchComponent],
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
