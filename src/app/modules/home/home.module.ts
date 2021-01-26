import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
