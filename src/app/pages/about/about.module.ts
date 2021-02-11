import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule],
  exports: [AboutComponent],
})
export class AboutModule {}
