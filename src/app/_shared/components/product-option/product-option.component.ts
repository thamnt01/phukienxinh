import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-option',
  templateUrl: './product-option.component.html',
  styleUrls: ['./product-option.component.scss']
})
export class ProductOptionComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }
  changeOption(index: number) {
    this.activeIndex = index;
  }

}
