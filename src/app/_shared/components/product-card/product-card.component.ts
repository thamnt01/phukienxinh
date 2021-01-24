import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  items = [
    {
      title: 'Mẫu mới nhất',
      textLead: 'Nàng không thể bỏ lỡ',
      cards: [
        {
          image: '/assets/images/ring1.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        },
        {
          image: '/assets/images/ring2.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        },
        {
          image: '/assets/images/ring3.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        },
        {
          image: '/assets/images/ring1.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        }
      ]
    },
    {
      title: 'Mẫu mới nhất',
      textLead: 'Nàng không thể bỏ lỡ',
      cards: [
        {
          image: '/assets/images/ring1.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        },
        {
          image: '/assets/images/ring2.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        },
        {
          image: '/assets/images/ring3.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        },
        {
          image: '/assets/images/ring1.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
