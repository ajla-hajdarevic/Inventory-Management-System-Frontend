import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sales} from './sales';
import {Observable} from 'rxjs';
import {SalesDetails} from './salesDetails';

@Injectable({
  providedIn: 'root'
})
export class SalesDetailsService {

  private baseUrl = '/api/salesDetails';

  constructor(private http: HttpClient) { }

  public getSalesDetails(){
    return this.http.get<SalesDetails[]>(this.baseUrl);
  }

  getSaleDetail(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSaleDetail(SaleDetails: SalesDetails): Observable<number> {
    console.log(123);
    return this.http.post<number>(this.baseUrl, SaleDetails);
  }

  updateSaleDetails(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSaleDetails(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSaleDetailsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
