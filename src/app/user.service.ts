import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(name: string) {
    const params = name ? '?name=' + name : '';
    return this.http.get('/greeting' + params);
  }
}
