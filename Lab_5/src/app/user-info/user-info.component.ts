import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  onSelectUser!: (user: any) => void;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.onSelectUser) {
      this.onSelectUser = data.onSelectUser;
    }
  }
}
