import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  isVisible = false;
  isDisplay = false;
  activeIndex = 0;
  index: number;
  imgOptions = [
    {
      image: '/assets/images/ring1.jpg'
    },
    {
      image: '/assets/images/ring2.jpg'
    },
    {
      image: '/assets/images/ring3.jpg'
    },
  ]
  images = [
    {
      thumb: '/assets/images/ring1.jpg',
      full: '/assets/images/carousel1.jpg'
    }
  ]

  items = [

    {
      image: '/assets/images/ring1.jpg',
      imageHover: '/assets/images/ring4.jpg',
      name: 'Sun Flower',
      code: 'SF',
      price: '10,000đ',
      link: '/',
    },
  ];
  constructor() { }
  changeOption(index: number) {
    this.activeIndex = index;
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
  handleAnotherCancel(): void {
    console.log('Button cancel clicked!');
    this.isDisplay = false;
  }
}
