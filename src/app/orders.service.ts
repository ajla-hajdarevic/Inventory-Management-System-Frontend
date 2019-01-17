import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Supplier} from './supplier';
import {Observable} from 'rxjs';
import {Orders} from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  private baseUrl = '/api/orders';

  constructor(private http: HttpClient) { }

  public getOrders(){
    return this.http.get<Orders[]>(this.baseUrl);
  }

  getOrder(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createOrder(Orders: Orders): Observable<number> {
    console.log(123);
    return this.http.post<number>(this.baseUrl, Orders);
  }

  updateOrder(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getOrderList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
