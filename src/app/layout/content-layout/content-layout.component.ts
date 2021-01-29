import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {
  isHide = true;
  user: any;
  products = [
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
  constructor() { }


}
