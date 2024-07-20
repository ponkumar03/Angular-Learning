import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() carAdded:EventEmitter<string[]> = new EventEmitter;
  cars:string[] =[];
  carName = "";
  addCar() {
    this.cars.push(this.carName);
    this.carName ="";

    this.carAdded.emit(this.cars);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
