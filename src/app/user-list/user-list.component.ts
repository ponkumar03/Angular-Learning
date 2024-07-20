import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users:user[] = []
  constructor(private http:HttpClient) {

   }

   getUsers() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users')
   }

  ngOnInit(): void {
    this.getUsers().subscribe((response) => {
         this.users = response
    })
  }

}

class user {
  name?:string;
}
