import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderwearComponent } from './underwear.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { UnderwearRoutes } from './underwear.routing';

@NgModule({
  imports: [
    CommonModule,
    UnderwearRoutes,
    SharedModule
  ],
  declarations: [UnderwearComponent]
})
export class UnderwearModule { }
