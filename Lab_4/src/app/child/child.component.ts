import { Component } from '@angular/core';
import {Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() employees: any[] = [];

  maxSalaryEmployee?: any;

  ngOnChanges(changes: SimpleChanges) {
    this.setMaxSalaryEmployee();
  }

  setMaxSalaryEmployee() {
    let maxSalaryEmployee: any = {
      name: '',
      salary: 0
    };
    for(let i = 0; i < this.employees.length; i++){
      if(this.employees[i]['salary'] > maxSalaryEmployee.salary){
        maxSalaryEmployee = this.employees[i];
      }
    }
    this.maxSalaryEmployee = maxSalaryEmployee;
  }
}
