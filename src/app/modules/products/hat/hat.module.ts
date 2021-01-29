import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HatComponent } from './hat.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { HatRoutes } from './hat.routing';

@NgModule({
  imports: [
    CommonModule,
    HatRoutes,
    SharedModule
  ],
  declarations: [HatComponent]
})
export class HatModule { }
