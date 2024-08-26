import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // FormBuilder Method
  // constructor(private formBuilder: FormBuilder) {
  //   this.contactForm = this.formBuilder.group({
  //     firstname: ['', [Validators.required, Validators.minLength(10)]],
  //     lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
  //     email: ['', [Validators.required, Validators.email]],
  //     gender: ['', [Validators.required]],
  //     isMarried: ['', [Validators.required]],
  //     country: ['', [Validators.required]],
  //     address: this.formBuilder.group({
  //       city: ['', [Validators.required]],
  //       street: ['', [Validators.required]],
  //       pincode: ['', [Validators.required]],
  //     })
  //   });
  // }
 
    

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    lastName: new FormControl('', [Validators.required]),  // Corrected the form control name
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    girdCheck: new FormControl('', [Validators.requiredTrue]),
    country: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
    }),
    skills: new FormArray([
      new FormControl('', [Validators.required])
    ])  // Added FormArray for skills
  });

  // Accessor methods for form controls
  get firstname() { return this.contactForm.get('firstName'); }
  get lastname() { return this.contactForm.get('lastName'); }
  get email() { return this.contactForm.get('email'); }
  get gender() { return this.contactForm.get('gender'); }
  get checkme() { return this.contactForm.get('girdCheck'); }
  get country() { return this.contactForm.get('country'); }
  get city() { return this.contactForm.get('address')?.get('city'); }
  get street() { return this.contactForm.get('address')?.get('street'); }
  get dob() { return this.contactForm.get('dob'); }
  get image() { return this.contactForm.get('image'); }
  get skills(): FormArray { return this.contactForm.get('skills') as FormArray; }

  // Method to create a new skill form group
  newSkill(): FormGroup {
    return new FormGroup({
      skill: new FormControl('', Validators.required)
    });
  }

  // Method to add a skill form group to the skills array
  addSkills() {
    this.skills.push(this.newSkill());
  }

  // Method to remove a skill form group from the skills array
  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.contactForm.patchValue({
        image: file
      });
    }
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  ngOnInit() {
    // this.setDefault();
    // this.patchName();
  }

  // Setvalue method
  setDefault() {
    let contact = {
      firstName: "Sachin",
      lastName: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      girdCheck: true,
      country: "2",
      dob: "1973-04-24",
      image: "",  // Add an appropriate value or remove this if not necessary
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
      }
    };

    this.contactForm.setValue(contact);
  }

  // patchName() {
  //   let contact = {
  //     firstname: "Rahul",
  //     lastname: "Dravid",
  //   }
 
  //   this.contactForm.patchValue(contact);
 
  // }

}
