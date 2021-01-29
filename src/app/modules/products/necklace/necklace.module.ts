import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NecklaceComponent } from './necklace.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { NecklaceRoutes } from './necklace.routing';

@NgModule({
  imports: [
    CommonModule,
    NecklaceRoutes,
    SharedModule
  ],
  declarations: [NecklaceComponent]
})
export class NecklaceModule { }
