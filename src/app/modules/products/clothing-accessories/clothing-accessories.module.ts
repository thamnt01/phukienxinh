import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingAccessoriesComponent } from './clothing-accessories.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ClothingAccessoriesRoutes } from './clothing-accessories.routing';

@NgModule({
  imports: [
    CommonModule,
    ClothingAccessoriesRoutes,
    SharedModule
  ],
  declarations: [ClothingAccessoriesComponent]
})
export class ClothingAccessoriesModule { }
