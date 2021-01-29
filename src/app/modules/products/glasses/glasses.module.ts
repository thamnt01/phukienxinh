import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassesComponent } from './glasses.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { GlassesRoutes } from './glasses.routing';

@NgModule({
  imports: [
    CommonModule,
    GlassesRoutes,
    SharedModule
  ],
  declarations: [GlassesComponent]
})
export class GlassesModule { }
