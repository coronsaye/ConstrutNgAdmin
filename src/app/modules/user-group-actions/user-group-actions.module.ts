import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupActionsComponent } from './group-actions/group-actions.component';
import { NewGroupActionComponent } from './new-group-action/new-group-action.component';

// Components Routing
import { UserGroupActionsRoutingModule } from './user-group-actions-routing.module';

@NgModule({
  declarations: [GroupActionsComponent, NewGroupActionComponent],
  imports: [
    CommonModule,
    UserGroupActionsRoutingModule
  ]
})
export class UserGroupActionsModule { }
