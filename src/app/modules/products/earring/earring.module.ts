import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarringComponent } from './earring.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { EarringRoutes } from './earring.routing';

@NgModule({
  imports: [
    CommonModule,
    EarringRoutes,
    SharedModule
  ],
  declarations: [EarringComponent]
})
export class EarringModule { }
