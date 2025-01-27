import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }


  // Get users
  getUsers() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users')
   }

  //  Add users
  addUser(id:number, name: string, email: string) {
    return this.http.post<user>('https://jsonplaceholder.typicode.com/users', { id, name, email })
  }

  deleteUser(id: any) {
      console.log(id)
    return this.http.delete<user[]>('https://jsonplaceholder.typicode.com/users/' + id)
  }

  //  edit users
  editUser(id:number, name: string, email: string) {
    return this.http.put<user>('https://jsonplaceholder.typicode.com/users', { id, name, email })
    }
  }

class user {
  id?: number;
  name?:string;
  email?:string;
}