import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HairAccessoriesComponent } from './hair-accessories.component';
import { HairAccessoriesRoutes } from './hair-accessories.routing';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HairAccessoriesRoutes,
    SharedModule
  ],
  declarations: [HairAccessoriesComponent]
})
export class HairAccessoriesModule { }
