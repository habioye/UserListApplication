import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.apiurl);
  }
  createUser(User:User):void{
    this.http.post<User>(this.apiurl,User);
  }
}
