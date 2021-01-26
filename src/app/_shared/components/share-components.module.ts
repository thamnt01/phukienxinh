import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { ProductOptionComponent } from './product-option/product-option.component';
import { ZorroAntdModule } from '../zorro-antd.module';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ZorroAntdModule,
    FormsModule
  ],
  exports: [
    ProductCardComponent,
    ProductOptionComponent,
    CategoryComponent
  ],
  declarations: [
    ProductCardComponent,
    ProductOptionComponent,
    CategoryComponent

  ]
})
export class ShareComponentsModule { }
