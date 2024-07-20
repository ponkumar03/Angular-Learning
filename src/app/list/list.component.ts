import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 @Input('carsInput') cars:string[]= [];

 carDataAdded(carsData:string[]) {
  this.cars = carsData;
 }
  constructor() { }

  ngOnInit(): void {
  }

}
