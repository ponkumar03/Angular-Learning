import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'List of Movies';

  movie = ['Batman', 'Spiderman', 'Superman', 'X-man']

  movies = [
    {title:'Batman', director:'shanger', language:'tamil', releaseDate:'jly,20'},
    {title:'Spiderman', director:'ravi', language:'english', releaseDate:'aug,05'},
    {title:'Superman', director:'bala', language:'hendi', releaseDate:'sep,10'},
    {title:'X-man', director:'selva', language:'malayalam', releaseDate:'oct,24'}
  ]

  // Switchcase
  num =0;

  // ngIF case
  showMe ='true';
  constructor() { }

  // ngStyle
  color ='red'; 

  // Date pipes
  toDate = new Date();

  ngOnInit(): void {
  }

  // Event Binding
  clickCount=0;
  click() {
    this.clickCount++;
  };

  click1() {
    this.clickCount--;
  }

  // input event
  value= ""
  value1= ""
  handleInput(event:any) {
    this.value = (event.target as HTMLInputElement).value;
  }
}
