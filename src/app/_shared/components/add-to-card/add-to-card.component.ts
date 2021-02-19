import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { CartProductListComponent } from '../cart-product-list/cart-product-list.component';
import { DemoCartComponent } from '../demo-cart/demo-cart.component';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.scss']
})
export class AddToCardComponent implements OnInit {
  amount = new FormControl(1, [Validators.required])
  items = [
    {
      name: 'Sun Flower',
      price: '10,000đ',
      activeIndex: 0,
      children: [
        {
          image: '/assets/images/ring1.jpg',
          code: 'SF',
          type: 'Vàng',
        },
        {
          image: '/assets/images/ring3.jpg',
          code: 'ST',
          type: 'Vàng',
        }
      ]
    },
  ];


  constructor(
    private modalRef: NzModalRef,
    private modal: NzModalService
  ) { }

  ngOnInit() {
  }
  createModal(): void {
    this.modal.create({
      nzTitle: 'Thêm vào giỏ hàng',
      nzContent: DemoCartComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
    });
  }
  getActiveItem(item: any) {
    return item.children[item.activeIndex];
  }
  showModal() {
    this.createModal();
    this.modalRef.destroy();

  }
  handleOk(): void {
    this.modalRef.destroy();
  }
  handleCancel(): void {
    this.modalRef.destroy();
  }
  addToCart() { }
}
