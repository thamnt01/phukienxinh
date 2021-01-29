import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NailComponent } from './nail.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { NailRoutes } from './nail.routing';

@NgModule({
  imports: [
    CommonModule,
    NailRoutes,
    SharedModule
  ],
  declarations: [NailComponent]
})
export class NailModule { }
