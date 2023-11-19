import { Component, ViewChild } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {OnInit} from '@angular/core'; 
import { RandomUserResponse } from 'src/assets/random-user-response';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserInfoComponent } from '../user-info/user-info.component';
import { SelectedUsersComponent } from '../selected-users/selected-users.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private apiUrl: string = 'https://randomuser.me/api/?results=10';
  users: any[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'dob', 'age'];

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.http.get<RandomUserResponse>(this.apiUrl)
      .subscribe(result =>
      {
        console.log(result);
        if(result.results)
          this.users = result.results;
        console.log(this.users);
      }
    );
  }

  dialogRef: MatDialogRef<UserInfoComponent> | null = null;

  openDialog(element: any): void {
    this.dialogRef = this.dialog.open(UserInfoComponent, {
    width: '250px',
    data: {
      element: element,
      onSelectUser: this.selectUser.bind(this)
    }
  });
}

  @ViewChild(SelectedUsersComponent) selecteUsersComponent!: SelectedUsersComponent;
  selectUser(user: any){
    if(this.selecteUsersComponent && this.selecteUsersComponent.users){
      if(this.selecteUsersComponent.users.findIndex(u => u === user) === -1){
        this.selecteUsersComponent.users = [...this.selecteUsersComponent.users, user];
        if (this.dialogRef) {
          this.dialogRef.close();
        }
      }
    }
  }
}
