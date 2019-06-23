import { Component, OnInit } from '@angular/core';
import { UserGroup } from '../user-group';

@Component({
  selector: 'app-new-user-group',
  templateUrl: './new-user-group.component.html',
  styleUrls: ['./new-user-group.component.scss']
})
export class NewUserGroupComponent implements OnInit {

  title: String;
  role: UserGroup;

  constructor() { }

  ngOnInit() {
    this.title = 'New User Group';
  }

}
