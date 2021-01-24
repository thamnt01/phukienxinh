import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {
  isHide = true;
  user: any;
  contents = [
    {
      image: 'url(/assets/images/carousel1.jpg)',
      title: 'Ngập tràn ưu đãi',
      pragragraph: 'Thả thính tình yêu',
      align: 'left'
    },
    {
      image: 'url(/assets/images/carousel2.jpg)',
      title: 'Ngập tràn ưu đãi',
      pragragraph: 'Thả thính tình yêu',
      align: 'center'
    },
    {
      image: 'url(/assets/images/carousel3.jpg)',
      title: 'Ngập tràn ưu đãi',
      pragragraph: 'Thả thính tình yêu',
      align: 'right'
    },
  ];
  constructor() { }


}
