import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { PaymentMethod } from '../payment/payment-method'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentMethod = PaymentMethod;
  radioValue: any;
  discountValue: any;
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: [null],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      city: [''],
      commune: [''],
      district: ['']
    })
  }

  ngOnInit() { }


}