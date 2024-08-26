import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  contact = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    gridCheck: false,
    cities: null,
    country: '',
    street: ''
  };

  cities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
    { id: 4, name: 'Houston' }
  ];

  ngOnInit(): void {
    // You can initialize any logic here if needed
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}

class Contact {
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;
  gridCheck!: boolean;
  country!: string;
  cities!: string;
  street!: string;
}
