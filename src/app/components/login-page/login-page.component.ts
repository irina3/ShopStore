import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegistrationService} from '../../services/registration/registration.service';
import {ILoginData} from '../../declaration/ILoginData';
import {DATA, TOKEN_DATA} from '../../constants';
import {StoreService} from '../../services/store/store.service';
import {IProduct} from '../../declaration/IProduct';
import {IResponseLoginData} from '../../declaration/IResponsLoginData';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  token = '';
  data: IResponseLoginData;
  isLogedIn = false;
    products: IProduct[];
  firstName: string;
  lastName: string;
  @Output() getToken = new EventEmitter<string>();

  loginData: ILoginData = {
    userName: '',
    password: ''
  };

  constructor(private registrationService: RegistrationService, private storeService: StoreService) {}


  ngOnInit() {
    console.log(this.token)
    this.token = localStorage.TOKEN_DATA;
    this.firstName = JSON.parse(localStorage.DATA).firstName;
    this.lastName = JSON.parse(localStorage.DATA).lastName;
    console.log(this.lastName);
  }
  sendToken() {
    console.log(this.token)
    this.getToken.emit(this.token);
  }
  login () {
    this.registrationService.login(this.loginData).subscribe(response => {
      console.log(this.loginData, "logijn")
      if (response && response.result) {
        this.data = response.result
        this.token = response.result.token;
        this.firstName =  response.result.firstName;
        this.lastName =  response.result.lastName;
        console.log(this.firstName, this.lastName)
        localStorage.setItem(TOKEN_DATA, `Bearer ${(this.token)}`);
        localStorage.setItem(DATA, JSON.stringify(this.data));
        console.log(localStorage)
        this.isLogedIn = true;
        this.sendToken();
      } else {
        alert(response.errorMessage );
      }
    });
  }
   logout() {
     this.isLogedIn = false;
     localStorage.setItem(TOKEN_DATA, '');
     this.token = '';
     this.sendToken();
  }
}
