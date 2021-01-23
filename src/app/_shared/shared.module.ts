import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZorroAntdModule } from './zorro-antd.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ZorroAntdModule
  ],
})
export class SharedModule { }
