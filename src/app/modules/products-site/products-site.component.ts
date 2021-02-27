import { Component, OnInit } from '@angular/core';
import { ProductModelDto, ProductModelsClient } from 'src/app/_shared/components/services/identity-api';

@Component({
  selector: 'app-products-site',
  templateUrl: './products-site.component.html',
  styleUrls: ['./products-site.component.scss']
})
export class ProductsSiteComponent implements OnInit {
  listOfData: ProductModelDto[] = [];
  constructor(
    private productModelsClient: ProductModelsClient
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.productModelsClient.getAll().subscribe(res => {
      this.listOfData = res.data;
    });
  }
}
