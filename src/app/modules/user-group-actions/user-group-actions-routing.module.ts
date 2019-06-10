import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupActionsComponent } from './group-actions/group-actions.component';
import { NewGroupActionComponent } from './new-group-action/new-group-action.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Group Actions'
    },
    children: [
      {
        path: '',
        redirectTo: 'group-actions'
      },
      {
        path: 'group-actions',
        component: GroupActionsComponent,
        data: {
          title: 'User Groups'
        }
      },
      {
        path: 'new-group-action',
        component: NewGroupActionComponent,
        data: {
          title: 'New Group Action'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGroupActionsRoutingModule {}
