import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-screen',
  templateUrl: './demo-screen.component.html',
  styleUrls: ['./demo-screen.component.scss']
})
export class DemoScreenComponent implements OnInit {
  value:boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  foods: any[] = [
    {value: 'demoValue1', viewValue: 'demoValue1'},
    {value: 'demoValue2', viewValue: 'demoValue2'},
    {value: 'demoValue3', viewValue: 'demoValue3'},
  ];



  valueSet(){
this.value=!this.value
  }
}
