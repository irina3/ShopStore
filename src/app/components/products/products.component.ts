import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {StoreService} from '../../services/store/store.service';
import {SELECTED_PRODUCTS, TOKEN_DATA} from '../../constants';
import {RegistrationService} from '../../services/registration/registration.service';
import {IProduct} from '../../declaration/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];
  public quantity: number = 1;
  token = '';
  isLogedIn;
  prQuantity: number;
  selectedProduct;
  removeProd;
  addProduct = {};

  constructor(public storeService: StoreService, private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.allProducts();
    this.storeService.currentQuantity.subscribe(quantity => this.quantity = quantity);
    this.storeService.selectedProducts = JSON.parse(localStorage.SELECTED_PRODUCTS);
    this.quantity = (JSON.parse(localStorage.SELECTED_PRODUCTS)).length;
  }

  allProducts () {
      this.storeService.getAllProducts().subscribe(response => {
        if (response && response.status === 1) {
          this.products = response.result;
        }
      });
    }

    accessProducts(event) {
    if (event.length !== 0) {
      this.products = event;
    } else {
      this.allProducts();
    }
  }
  sendQuantity(quantity, id) {
    console.log(this.storeService.selectedProducts)
    this.addProduct = this.storeService.selectedProducts.find(element => element.id === id)
    console.log(this.addProduct)
    if (!this.addProduct) {
      this.selectedProduct = this.products.find(element => element.id === id);
      this.storeService.selectedProducts.push(this.selectedProduct);
      localStorage.setItem(SELECTED_PRODUCTS, JSON.stringify(this.storeService.selectedProducts))
      this.quantity = this.storeService.selectedProducts.length;
      this.storeService.changeQuantity(this.quantity);
    }
  }
  // checkAddProduct(id) {
  //   if (this.storeService.selectedProducts.some(item => item.id === id)) {
  //     return true;
  //   }
  //
  // }
  removeProduct(id) {
    this.removeProd = this.storeService.selectedProducts.find(element => element.id === id);
    const index = this.storeService.selectedProducts.indexOf(this.removeProd);
    if (this.removeProd ) {
      this.storeService.selectedProducts.splice(index, 1);
      localStorage.setItem(SELECTED_PRODUCTS, JSON.stringify(this.storeService.selectedProducts));
      this.quantity = this.storeService.selectedProducts.length;
      this.storeService.changeQuantity(this.quantity);
    }
  }
  // valueChange(event) {
  //   console.log(event)
  //   this.prQuantity = +event;
  //   this.quantity += this.prQuantity;
  // }
}
