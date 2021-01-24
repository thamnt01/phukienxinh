import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZorroAntdModule } from './zorro-antd.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShareComponentsModule } from './components/share-components.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ZorroAntdModule,
    ShareComponentsModule
  ],
})
export class SharedModule { }
