import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSiteComponent } from './products-site.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ProductsSiteRoutes } from './products-site.routing';

@NgModule({
  imports: [
    CommonModule,
    ProductsSiteRoutes,
    SharedModule
  ],
  declarations: [ProductsSiteComponent]
})
export class ProductsSiteModule { }
