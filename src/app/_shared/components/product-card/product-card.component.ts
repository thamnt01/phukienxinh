import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddToCardComponent } from '../add-to-card/add-to-card.component';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() data: any;
  // @Output() newItemEvent = new EventEmitter<string>();
  isVisible = false;
  isDisplay = false;
  index: number;
  images = [
    {
      thumb: '/assets/images/ring1.jpg',
      full: '/assets/images/carousel1.jpg'
    }
  ];

  items = {
    name: 'Sun Flower',
    price: '10,000đ',
    activeIndex: 0,
    children: [
      {
        image: '/assets/images/ring1.jpg',
        code: 'SF',
      },
      {
        image: '/assets/images/ring3.jpg',
        code: 'ST',
      }
    ]
  };
  constructor(private modal: NzModalService) { }
  getActiveData(item: any) {
    return item.children[item.activeIndex];
  }
  createModal(): void {
    this.modal.create({
      nzTitle: 'Thêm vào giỏ hàng',
      nzContent: AddToCardComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
    });
  }

  showModal(): void {
    this.createModal();
  }
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }
}
