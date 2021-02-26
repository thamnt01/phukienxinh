import { Component, OnInit } from '@angular/core';
import { ProductsClient } from 'src/app/_shared/components/services/identity-api';

@Component({
  selector: 'app-products-site',
  templateUrl: './products-site.component.html',
  styleUrls: ['./products-site.component.scss']
})
export class ProductsSiteComponent implements OnInit {
  listOfData = [];
  productName = [];
  constructor(
    private productsClient: ProductsClient,
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.productsClient.getAll().subscribe(result => {
      this.listOfData = result.data;
    });
  }
}
