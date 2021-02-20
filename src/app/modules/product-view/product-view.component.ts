import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  options = [
    {
      link: '/hair-accessories',
      title: 'Phụ kiện tóc'
    },
    {
      link: '/earring',
      title: 'Khuyên tai'
    },
    {
      link: '/hat',
      title: 'Mũ'
    },
    {
      link: '/glasses',
      title: 'Kính'
    },
    {
      link: '/ring',
      title: 'Nhẫn'
    },
    {
      link: '/bracelet',
      title: 'Vòng tay, lắc chân'
    },
    {
      link: '/necklace',
      title: 'Vòng cổ, khăn'
    },
    {
      link: '/clothing-accessories',
      title: 'Phụ kiện quần áo'
    },
    {
      link: '/nail',
      title: 'Móng'
    },
    {
      link: '/underwear',
      title: 'Đồ lót'
    },
    {
      link: '/other',
      title: 'Khác'
    },
  ]

  items = {
    name: 'Sun Flower',
    price: '10,000đ',
    activeIndex: 0,
    children: [
      {
        image: [
          '/assets/images/ring1.jpg',
          '/assets/images/ring2.jpg',
          '/assets/images/ring3.jpg',
        ],
        code: 'SF',
      },
      {
        image: [
          '/assets/images/ring3.jpg'
        ],
        code: 'ST',
      },
      {
        image: [
          '/assets/images/ring4.jpg',
          '/assets/images/ring4.jpg',
        ],
        code: 'ST',
      }
    ]
  };
  firstImage: any;
  restImage = [];
  constructor(private gallery: Gallery) { }

  ngOnInit() {
    let images = [];
    this.items.children.forEach(x => images = images.concat(x.image.map(path => ({ path }))));
    this.firstImage = images.splice(1, 1)[0];
    this.restImage = images;
  }
  showGallery(index: number) {
    let images = [];
    this.items.children.forEach(x => images = images.concat(x.image.map(path => ({ path }))));
    let prop = {
      images,
      index
    };
    this.gallery.load(prop);
  }
}
