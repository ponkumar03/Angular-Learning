import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  loading = false;
  errorMessage= "";

  ngOnInit(): void {
    this.auth.isAuthendicated();
  }

  loginForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log (this.loginForm.value);
    this.loading=true;

    this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next:data => {
        console.log("login token" + data.idToken);
        this.auth.storeToken(data.idToken)
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
      }).add(() => {
        this.loading = false;
        console.log('Login complated')
    })
  }

}
