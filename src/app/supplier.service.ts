import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Supplier} from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseUrl = '/api/suppliers';

  constructor(private http: HttpClient) { }

  public getSuppliers(){
    return this.http.get<Supplier[]>(this.baseUrl);
  }

  getSupplier(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSupplier(Supplier: Supplier): Observable<number> {
    console.log(123);
    return this.http.post<number>(this.baseUrl, Supplier);
  }

  updateSupplier(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSupplier(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSupplierList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }

}
