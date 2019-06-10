import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';


// Components Routing
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UsersComponent, NewUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
