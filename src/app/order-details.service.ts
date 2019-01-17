import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Supplier} from './supplier';
import {Observable} from 'rxjs';
import {OrderDetails} from './orderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  private baseUrl = '/api/orderDetails';

  constructor(private http: HttpClient) { }

  public getOrderDetails(){
    return this.http.get<OrderDetails[]>(this.baseUrl);
  }

  getOrderDetail(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createOrderDetail(OrderDetail: OrderDetails): Observable<number> {
    console.log(123);
    return this.http.post<number>(this.baseUrl, OrderDetail);
  }

  updateOrderDetails(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteOrderDetail(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getOrderDetailsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
