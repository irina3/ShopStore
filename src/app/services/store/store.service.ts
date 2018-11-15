import { Injectable } from '@angular/core';
import {DOMAIN, TOKEN_DATA} from '../../constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {IProduct} from '../../declaration/IProduct';
import {IResponse} from '../../declaration/IResponse';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  selectedProducts: Array<IProduct> = [];
  private quantitySource = new BehaviorSubject(0);
  currentQuantity = this.quantitySource.asObservable();

  constructor(private http: HttpClient) { }
  baseUrl = `${DOMAIN}Products`;
  changeQuantity(quantity) {
    this.quantitySource.next(quantity);
  }


  getAllProducts (): Observable<IResponse<IProduct[]>> {
    console.log(this.selectedProducts)
    const tokenData = localStorage.TOKEN_DATA;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `${tokenData}`
      })
    };
    const url = `${this.baseUrl}`;
    return this.http.get(url, httpOptions) as Observable<IResponse<IProduct[]>>;
  }
  checkAddProduct(id) {
    if (this.selectedProducts.some(item => item.id === id)) {
      return true;
    }
  }
}

