import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store/store.service';
import {ORDER_QUANTITY, SELECTED_PRODUCTS} from '../../constants';

@Component({
  selector: 'app-shoping-page',
  templateUrl: './shoping-page.component.html',
  styleUrls: ['./shoping-page.component.scss']
})
export class ShopingPageComponent implements OnInit {
  products = [];
  public shopingProducts = [];
  quantity;
  totalPrice = 0;
  orderQuantity = 1;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.SELECTED_PRODUCTS);
    this.shopingProducts = this.products.map(product => product.quantity = this.orderQuantity);
    console.log(this.shopingProducts);

    this.products.forEach(item => this.totalPrice +=  (JSON.parse(localStorage.ORDER_QUANTITY) * item.price));
    console.log(this.products)
  }
  removeProduct(id) {
   const removeProd = this.storeService.selectedProducts.find(element => element.id === id);
   const index = this.storeService.selectedProducts.indexOf(removeProd);
    if (removeProd ) {
      this.storeService.selectedProducts.splice(index, 1);
      localStorage.setItem(SELECTED_PRODUCTS, JSON.stringify(this.storeService.selectedProducts));
      this.quantity = this.storeService.selectedProducts.length;
      this.storeService.changeQuantity(this.quantity);
    }
  }
  valueChange(event) {
    this.orderQuantity = event;
    localStorage.setItem(ORDER_QUANTITY, JSON.stringify(this.orderQuantity));
  }
}
