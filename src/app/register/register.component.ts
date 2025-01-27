import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.canAthendicated();
  }

  loading = false;
  errorMessage= "";

  registerForm = new FormGroup ({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  get name() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    if(this.registerForm.valid) {
      console.log (this.registerForm.value)
    this.loading=true;

    this.auth.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password)
    .subscribe({
      next:data => {
        // store token from response
        this.auth.storeToken(data.idToken)
        console.log('register token' +data.idToken)
      },
      error:data =>{
        console.log(data)
        // if(data.error.error.message=="INVALID_EMAIL"){
        //   this.errorMessage="Invalid Email"
        // }
        // else if(data.error.error.message=="EMAIL_EXSIT"){
        //   this.errorMessage="Email Already Exsit"
        // }
        // else{
        //   this.errorMessage="Unknown Error";
        // }
      }
    }).add(()=>{
      this.loading=false;
      console.log('register completed')
    })
  }
    }

}
