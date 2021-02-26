import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DemoCartComponent } from '../demo-cart/demo-cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.scss']
})
export class AddToCardComponent implements OnInit {
  amount = new FormControl(1, [Validators.required])
  item = {
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
  };


  constructor(
    private modalRef: NzModalRef,
    private modal: NzModalService,
    private cartService: CartService,
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
  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.modalRef.destroy()
    debugger
  }
}
