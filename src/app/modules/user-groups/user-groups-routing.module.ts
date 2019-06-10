import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserGroupsComponent } from './user-groups/user-groups.component';
import { NewUserGroupComponent } from './new-user-group/new-user-group.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User Groups'
    },
    children: [
      {
        path: '',
        redirectTo: 'user-groups'
      },
      {
        path: 'user-groups',
        component: UserGroupsComponent,
        data: {
          title: 'User Groups'
        }
      },
      {
        path: 'new-user-group',
        component: NewUserGroupComponent,
        data: {
          title: 'New User Group'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGroupsRoutingModule {}
