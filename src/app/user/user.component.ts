import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: User[] = [];
  userserv = new UserService(this.http);
  constructor(private http:HttpClient) {
    // this.users = this.userserv.getUsers();
  }

  getUsers() {
    this.users = this.userserv.getUsers();

  }
}
