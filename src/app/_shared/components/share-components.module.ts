import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { ZorroAntdModule } from '../zorro-antd.module';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { CartProductListComponent } from './cart-product-list/cart-product-list.component';
import { AddToCardComponent } from './add-to-card/add-to-card.component';

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
    CategoryComponent,
    CartProductListComponent,
    AddToCardComponent
  ],
  declarations: [
    ProductCardComponent,
    CategoryComponent,
    CartProductListComponent,
    AddToCardComponent
  ]
})
export class ShareComponentsModule { }
