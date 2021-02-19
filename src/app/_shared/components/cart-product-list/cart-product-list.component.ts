import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss']
})
export class CartProductListComponent implements OnInit {
  amount = new FormControl(1, [Validators.required])
  demoValue = 1;
  listOfData = [
    {
      image: '/assets/images/ring3.jpg',
      name: 'Flower Ring',
      type: 'vàng',
      productPrice: '30,000đ',
      totalPrice: '90,000đ'
    },
    {
      image: '/assets/images/scarf1.jpg',
      name: 'Flower Ring',
      type: 'vàng',
      productPrice: '30,000đ',
      totalPrice: '90,000đ'
    },
    {
      image: '/assets/images/neck-lace.jpeg',
      name: 'Flower Ring',
      type: 'vàng',
      productPrice: '30,000đ',
      totalPrice: '90,000đ'
    },
    {
      image: '/assets/images/ring2.jpg',
      name: 'Flower Ring',
      type: 'vàng',
      productPrice: '30,000đ',
      totalPrice: '90,000đ'
    },

  ];
  constructor(private nzMessageService: NzMessageService) { }

  ngOnInit() {
  }
  confirm(): void {
    this.nzMessageService.info('Xóa thành công');
  }


}
