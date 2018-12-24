import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {UserModel} from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();
  content: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user.content = '';
    this.content = '';
  }
  getUser() {
    console.log(this.content);
    this.userService.getUser(this.content)
      .subscribe((res) => {
        this.user = res;
      }, (err) => {
        console.log(err);
      });
  }

}
