import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  radioValue = 'A';

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
  constructor() { }

  ngOnInit() {
  }

}
