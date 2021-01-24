import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { ProductOptionComponent } from './product-option/product-option.component';
import { ZorroAntdModule } from '../zorro-antd.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ZorroAntdModule
  ],
  exports: [
    ProductCardComponent,
    ProductOptionComponent,
  ],
  declarations: [
    ProductCardComponent,
    ProductOptionComponent,

  ]
})
export class ShareComponentsModule { }
