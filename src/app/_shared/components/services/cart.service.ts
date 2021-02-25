import { Injectable } from '@angular/core';
// interface Product {
//   image?: any;
//   name: string;
//   price: number;
//   amount: number;
//   totalPrice: number;
// }
@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = [];
  // items = [];
  constructor() {
    this.products = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(product: any): void {
    this.products.push(product);
    localStorage.setItem('cart', JSON.stringify(this.products));

  }

  getProduct(): any {
    return [...this.products];
  }
  deleteProduct(data) {
    this.products = this.products.filter(x => x !== data)
  }
}
