import { Component, OnInit } from '@angular/core';
import { UserGroupService } from '../../../services/user-group.service';
import { UserGroup } from '../user-group';


@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {

  roles: UserGroup[];
  title: String;
  fault: String;

  constructor(private userGroupService: UserGroupService) { }

  ngOnInit() {
    this.title = 'Role Listing';
    this.show();
    this.title = 'User Groups';
  }

  show(): void {


    this.userGroupService.getUserGroups()


    .subscribe(roles => {
      this.roles = roles;
      console.log(JSON.stringify(this.roles));
     },

     error => {

      this.fault = error ;// error path
      console.log(JSON.stringify(this.fault));

     }

     );


  }

}
