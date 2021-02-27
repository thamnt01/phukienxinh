import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsClient } from 'src/app/_shared/components/services/identity-api';

@Component({
  selector: 'app-products-site',
  templateUrl: './products-site.component.html',
  styleUrls: ['./products-site.component.scss']
})
export class ProductsSiteComponent implements OnInit {
  private Url = "https://localhost:5001/api/Products";
  listOfData = [];
  productName = [];
  constructor(
    private http: HttpClient,

  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.http.get<any>(this.Url).subscribe(result => {
      if (this.Url) {
        this.listOfData = result.data;
        console.log(this.listOfData)
      }
    })
  }
}
