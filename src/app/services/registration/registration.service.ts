import { Injectable } from '@angular/core';
import {DOMAIN, TOKEN_DATA} from '../../constants';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {IUser} from '../../declaration/IUser';
import {IResponse} from '../../declaration/IResponse';
import {ILoginData} from '../../declaration/ILoginData';
import {IResponseLoginData} from '../../declaration/IResponsLoginData';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) {
  }
  baseUrl = `${DOMAIN}Users/`;
  public registration(data: IUser): Observable<IResponse<null>> {
    const url = `${this.baseUrl}register`;
    return this.http.post(url, data) as Observable<IResponse<null>>;
  }

  public login(data: ILoginData): Observable<IResponse<IResponseLoginData>> {
    const url = `${this.baseUrl}authenticate`;
    return this.http.post(url, data) as Observable<IResponse<IResponseLoginData>>;
  }

}
