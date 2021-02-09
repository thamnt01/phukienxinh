import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  isVisible = false;
  isDisplay = false;
  index: number;
  images = [
    {
      thumb: '/assets/images/ring1.jpg',
      full: '/assets/images/carousel1.jpg'
    }
  ]

  items = [
    {
      name: 'Sun Flower',
      price: '10,000đ',
      activeIndex: 0,
      children: [
        {
          image: '/assets/images/ring1.jpg',
          code: 'SF',
        },
        {
          image: '/assets/images/ring3.jpg',
          code: 'ST',
        }
      ]
    },
    {
      name: 'Sun Flower',
      price: '10,000đ',
      activeIndex: 0,
      children: [
        {
          image: '/assets/images/ring1.jpg',
          code: 'SF',
        },
        {
          image: '/assets/images/ring3.jpg',
          code: 'ST',
        }
      ]
    },
  ];
  constructor() { }
  getActiveData(item: any) {
    return item.children[item.activeIndex]
  }

  showModal(): void {
    this.isVisible = true;
  }
  showAnotherModal(): void {
    this.isDisplay = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
  handleAnotherOk(): void {
    console.log('Button ok clicked!');
    this.isDisplay = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  handleListCancel(): void {
    console.log('Button cancel clicked!');
    this.isDisplay = false;
  }
  addToCart(): void {
    this.items
  }
}
