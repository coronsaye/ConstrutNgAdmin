import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { NewUserGroupComponent } from './new-user-group/new-user-group.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

// Components Routing
import { UserGroupsRoutingModule } from './user-groups-routing.module';

@NgModule({
  declarations: [
    UserGroupsComponent,
    NewUserGroupComponent],
  imports: [
    CommonModule,
    UserGroupsRoutingModule,
    FormsModule

  ]
})
export class UserGroupsModule { }
