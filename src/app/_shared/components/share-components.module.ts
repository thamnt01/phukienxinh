import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { ProductOptionComponent } from './product-option/product-option.component';
import { ZorroAntdModule } from '../zorro-antd.module';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { CartProductListComponent } from './cart-product-list/cart-product-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ZorroAntdModule,
    FormsModule,
    NgxImageZoomModule
  ],
  exports: [
    ProductCardComponent,
    ProductOptionComponent,
    CategoryComponent,
    CartProductListComponent
  ],
  declarations: [
    ProductCardComponent,
    ProductOptionComponent,
    CategoryComponent,
    CartProductListComponent
  ]
})
export class ShareComponentsModule { }
