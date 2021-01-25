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
      title: 'Được quan tâm nhất',
      textLead: 'Những item được yêu thích nhất trong tuần',
      cards: [
        {
          image: '/assets/images/neck-lace.jpeg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        },
        {
          image: '/assets/images/scarf1.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        },
        {
          image: '/assets/images/scarf2.jpg',
          imageHover: '/assets/images/ring4.jpg',
          name: 'Sun Flower',
          code: 'SF',
          price: '10,000đ',
          link: '/',
        },
        {
          image: '/assets/images/neck-lace2.jpg',
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
