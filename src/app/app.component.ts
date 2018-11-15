import {Component, OnInit, ViewChild} from '@angular/core';
import {RegistrationService} from './services/registration/registration.service';
import {TOKEN_DATA} from './constants';
import {ProductsComponent} from './components/products/products.component';
import {StoreService} from './services/store/store.service';
import {Router} from '@angular/router';
const m = localStorage.TOKEN_DATA;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogedIn = false;
  token = '';
  public quantity: number;

  constructor(private registrationService: RegistrationService, private storeService: StoreService, private router: Router) {
  }


  ngOnInit() {
    this.storeService.currentQuantity.subscribe(quantity => this.quantity = quantity);
    this.token = localStorage.TOKEN_DATA;
    this.quantity = (JSON.parse(localStorage.SELECTED_PRODUCTS)).length;
    console.log(this.quantity)

  }
  accessToken(event) {
    this.token = event;
  }
  goShoping() {
    this.router.navigate(['shopping'])
  }

}
