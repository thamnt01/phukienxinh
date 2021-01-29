import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BraceletComponent } from './bracelet.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { BraceletRoutes } from './bracelet.routing';

@NgModule({
  imports: [
    CommonModule,
    BraceletRoutes,
    SharedModule
  ],
  declarations: [BraceletComponent]
})
export class BraceletModule { }
