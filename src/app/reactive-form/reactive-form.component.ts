import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  contactForm = new FormGroup ({
    firstName : new FormControl('', [Validators.required, Validators.minLength(10)]),
    lasteName : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    gender : new FormControl('', [Validators.required]),
    girdCheck : new FormControl ('', [Validators.requiredTrue]),
    country : new FormControl('', [Validators.required]),
    address : new FormGroup({
      city : new FormControl('', [Validators.required]),
      street : new FormControl('', [Validators.required]),
    })
  });

  get firstname() {
    return this.contactForm.get('firstName')
  }
  get lastname() {
    return this.contactForm.get('lasteName')
  }
  get email() {
    return this.contactForm.get('email')
  }
  get gender() {
    return this.contactForm.get('gender')
  }
  get checkme() {
    return this.contactForm.get('girdCheck')
  }
  get country() {
    return this.contactForm.get('country')
  }
  get city() {
    return this.contactForm.get('address')?.get('city')
  }
  get street() {
    return this.contactForm.get('address')?.get('street')
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
