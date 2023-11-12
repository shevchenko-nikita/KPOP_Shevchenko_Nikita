import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  employees: any[] = [];
  nameInput?: string;
  salaryInput?: number;
  
  addEmployee() {
    if(this.nameInput && this.salaryInput){
      this.employees = [...this.employees, {
        name: this.nameInput,
        salary: this.salaryInput
      }];
      console.log(this.employees)
    }
  }
}
