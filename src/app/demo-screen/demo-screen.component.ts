import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  movies = [
    'AT-BMA001 4001. CRM Rauchmelder 1563/1(gefahrliche Mangel)',
    'AT-BMA002 4001. CRM Rauchmelder 1563/1(gefahrliche Mangel)',
    'SIBE-001 4001. CRM Rauchmelder 1563/1(gefahrliche Mangel)',
    'AT-BMA003 4001. CRM Rauchmelder 1563/1(gefahrliche Mangel)',
  ]

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
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
