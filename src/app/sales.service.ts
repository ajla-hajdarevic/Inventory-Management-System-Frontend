import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Orders} from './orders';
import {Observable} from 'rxjs';
import {Sales} from './sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {


  private baseUrl = '/api/sales';

  constructor(private http: HttpClient) { }

  public getSales(){
    return this.http.get<Sales[]>(this.baseUrl);
  }

  getSale(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSale(Sale: Sales): Observable<number> {
    console.log(123);
    return this.http.post<number>(this.baseUrl, Sale);
  }

  updateSale(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSale(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSaleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
