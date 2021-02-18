import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.scss']
})
export class AddToCardComponent implements OnInit {

  constructor(private modal: NzModalRef) { }

  ngOnInit() {
  }
  handleOk() {

  }
  handleCancel() {
    this.modal.destroy()
  }
  addToCart() { }
}
