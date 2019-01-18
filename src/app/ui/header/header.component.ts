import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) {
  }

  collapsed = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }


  private roles: string[];
  private authority: string;

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
       if(role === 'ROLE_USER') this.authority = 'user';
        return true;
      });


    }

  }
}
