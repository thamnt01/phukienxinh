import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZorroAntdModule } from './zorro-antd.module';
import { ShareComponentsModule } from './components/share-components.module';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ZorroAntdModule,
    ShareComponentsModule,
    PipeModule
  ],
})
export class SharedModule { }
