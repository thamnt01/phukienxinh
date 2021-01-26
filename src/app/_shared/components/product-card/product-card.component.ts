import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  isVisible = false;

  items = [

    {
      image: '/assets/images/ring1.jpg',
      imageHover: '/assets/images/ring4.jpg',
      name: 'Sun Flower',
      code: 'SF',
      price: '10,000đ',
      link: '/',
    },

    // {
    //   title: 'Được quan tâm nhất',
    //   textLead: 'Những item được yêu thích nhất trong tuần',
    //   cards: [
    //     {
    //       image: '/assets/images/neck-lace.jpeg',
    //       imageHover: '/assets/images/ring4.jpg',
    //       name: 'Sun Flower',
    //       code: 'SF',
    //       price: '10,000đ',
    //       link: '/',
    //     },
    //     {
    //       image: '/assets/images/scarf1.jpg',
    //       imageHover: '/assets/images/ring4.jpg',
    //       name: 'Sun Flower',
    //       code: 'SF',
    //       price: '10,000đ',
    //       link: '/',
    //     },
    //     {
    //       image: '/assets/images/scarf2.jpg',
    //       imageHover: '/assets/images/ring4.jpg',
    //       name: 'Sun Flower',
    //       code: 'SF',
    //       price: '10,000đ',
    //       link: '/',
    //     },
    //     {
    //       image: '/assets/images/neck-lace2.jpg',
    //       imageHover: '/assets/images/ring4.jpg',
    //       name: 'Sun Flower',
    //       code: 'SF',
    //       price: '10,000đ',
    //       link: '/',
    //     }
    //   ]
    // }
  ];
  constructor() { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
