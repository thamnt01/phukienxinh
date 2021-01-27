import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss']
})
export class CartProductListComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
