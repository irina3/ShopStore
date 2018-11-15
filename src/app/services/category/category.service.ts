import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {IResponse} from '../../declaration/IResponse';
import {ICategory} from '../../declaration/ICategory';
import {DOMAIN} from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  baseUrl = `${DOMAIN}Categories`;

  getCategories (): Observable<IResponse<ICategory[]>> {
    const tokenData = localStorage.TOKEN_DATA;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `${tokenData}`
      })
    };
    const url = `${this.baseUrl}`;
    return this.http.get(url, httpOptions) as Observable<IResponse<ICategory[]>>;
  }
  getCategoriesById (id): Observable<IResponse<ICategory[]>> {
    const url = `${this.baseUrl}/${id}/Products`;
    return this.http.get(url) as Observable<IResponse<ICategory[]>>;
  }
}
