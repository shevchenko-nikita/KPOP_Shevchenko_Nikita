import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserInfoComponent } from './user-info/user-info.component';
import { SelectedUsersComponent } from './selected-users/selected-users.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserInfoComponent,
    SelectedUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
