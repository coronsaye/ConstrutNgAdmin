import { Component, OnInit } from '@angular/core';
import { UserGroup } from '../user-group';

@Component({
  selector: 'app-new-user-group',
  templateUrl: './new-user-group.component.html',
  styleUrls: ['./new-user-group.component.scss']
})
export class NewUserGroupComponent implements OnInit {

  caption: String = 'New UserGroup';
  role: UserGroup;

  constructor(private userGroupService: UserGroupService) { }

  ngOnInit() {

  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userGroupService.addUserGroup({ name } as UserGroup)
      .subscribe(role => {
        this.roles.push(role);
      });
  }

}
