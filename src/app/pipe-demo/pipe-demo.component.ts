import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})


export class PipeDemoComponent implements OnInit  {

  day = new Date();
  num = 12345.67;
  num1 = 0.56;
  name = 'raj kumar';
  obj = {name: 'raj', age: 26};
  num2 = [1,2,3,4,5];

  value = "";
  users = [{name: 'ram', gender: 'm'}, {name: 'raj', gender: 'm'}, {name: 'anu', gender: 'f'}, {name: 'selvi', gender: 'f'},]

  addusers(value:any) {
    this.users.push({
        name: "value",
        gender: "m"
    });
}
  constructor() { }

  ngOnInit(): void {
  }

}
