import { Component } from '@angular/core';

@Component({
  selector: 'app-selected-users',
  templateUrl: './selected-users.component.html',
  styleUrls: ['./selected-users.component.css']
})
export class SelectedUsersComponent {
  users: any[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'dob', 'age'];

  constructor() { }

  ngOnInit() {
    
  }
}
