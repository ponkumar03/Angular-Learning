import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users:user[] = []
  isEditMode = false;
  editingUserId?: number;
  constructor(private http:HttpClient, private userListServices:UserListService) {

   }

  //  USER FORM
  userForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })


   ngOnInit(): void {
    this.userListServices.getUsers().subscribe((response) => {
         this.users = response
    })
  }

  onSubmit(){
    if(this.isEditMode){
      this.userListServices.editUser(this.userForm.value.id, this.userForm.value.name, this.userForm.value.email).subscribe((response) => {
        this.users.push(response)
      })
    }
    else{
      this.userListServices.addUser(this.userForm.value.id, this.userForm.value.name, this.userForm.value.email).subscribe((response) => {
        this.users.push(response)
      })
    }

  }


    // Set up form for editing a user
    onEdit(user: user) {
      this.isEditMode = true;
      this.editingUserId = user.id;
      this.userForm.setValue({
        id: user.id,
        name: user.name,
        email: user.email
      });
    }

    onDelete(id:any){
      this.userListServices.deleteUser(id).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (error) => {
          console.error(error)
        }
      })
        
      }
    }


class user {
  id?: number;
  name?:string;
  email?:string;
}
