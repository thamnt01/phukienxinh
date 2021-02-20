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
  items = [];
  constructor() { }
  // addToCart(product): void {

  //   localStorage.setItem('cart', product);
  // }
  // getItems(): any {
  //   return localStorage.getItem('cart');
  // }
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
}
