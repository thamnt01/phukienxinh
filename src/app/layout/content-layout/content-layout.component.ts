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
      link: '/products',
      title: 'Phụ kiện tóc'
    },
    {
      link: '/products',
      title: 'Khuyên tai'
    },
    {
      link: '/products',
      title: 'Mũ'
    },
    {
      link: '/products',
      title: 'Kính'
    },
    {
      link: '/products',
      title: 'Nhẫn'
    },
    {
      link: '/products',
      title: 'Vòng tay, lắc chân'
    },
    {
      link: '/products',
      title: 'Vòng cổ, khăn'
    },
    {
      link: '/products',
      title: 'Phụ kiện quần áo'
    },
    {
      link: '/products',
      title: 'Móng'
    },
    {
      link: '/products',
      title: 'Đồ lót'
    },
    {
      link: '/products',
      title: 'Khác'
    },

  ]
  constructor() { }


}
