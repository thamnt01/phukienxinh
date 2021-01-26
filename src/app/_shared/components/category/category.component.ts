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
      link: '/ring',
      type: 'Nhẫn'
    },
    {
      link: '/ring',
      type: 'Khăn'
    },
    {
      link: '/ring',
      type: 'Phụ kiện quần áo'
    },
    {
      link: '/ring',
      type: 'Phụ kiện tóc'
    },
    {
      link: '/ring',
      type: 'Hàng sale'
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
