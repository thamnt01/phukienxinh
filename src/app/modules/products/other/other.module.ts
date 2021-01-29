import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { OtherRoutes } from './other.routing';

@NgModule({
  imports: [
    CommonModule,
    OtherRoutes,
    SharedModule
  ],
  declarations: [OtherComponent]
})
export class OtherModule { }
