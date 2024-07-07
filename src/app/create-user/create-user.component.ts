import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  // userserv:User;
  user:User ={id:0,firstname:'',lastname:'',role:''};
  constructor(private userserv:UserService) {}
  addUser() {
    this.userserv.createUser(this.user);
  }
}
