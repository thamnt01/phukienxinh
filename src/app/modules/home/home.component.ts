import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [
    {
      title: 'Sản phẩm được quan tâm nhất',
      textLead: 'Nàng không nên bỏ lỡ'
    },
    {
      title: 'Sản phẩm mới nhất',
      textLead: 'Nàng không nên bỏ lỡ'
    }
  ]
  contents = [
    {
      image: 'url(/assets/images/img1.jpg)',
      title: 'Ngập tràn ưu đãi',
      pragragraph: 'Thả thính tình yêu',
      align: 'left'
    },
    {
      image: 'url(/assets/images/img4.jpg)',
      title: 'Ngập tràn ưu đãi',
      pragragraph: 'Thả thính tình yêu',
      align: 'center'
    },
    {
      image: 'url(/assets/images/img5.jpg)',
      title: 'Ngập tràn ưu đãi',
      pragragraph: 'Thả thính tình yêu',
      align: 'right'
    },
  ];
  topics = [
    {
      img: '/assets/images/img3.jpg',
      title: 'Một chiều thu',
      content: 'Mùa thu và nỗi nhớ'
    },
    {
      img: '/assets/images/img2.jpg',
      title: 'Một chiều thu',
      content: 'Mùa thu và nỗi nhớ'
    },
    {
      img: '/assets/images/img1.jpg',
      title: 'Một chiều thu',
      content: 'Mùa thu và nỗi nhớ'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
