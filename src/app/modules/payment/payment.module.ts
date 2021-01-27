import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { PaymentRoutes } from './payment.routing';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutes,
    SharedModule,

  ],
  declarations: [PaymentComponent]
})
export class PaymentModule { }
