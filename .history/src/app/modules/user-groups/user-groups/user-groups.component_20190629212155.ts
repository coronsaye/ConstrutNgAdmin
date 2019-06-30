import { Component, OnInit } from '@angular/core';
import { UserGroupService } from '../../../services/user-group.service';
import { UserGroup } from '../../../models/user-group';
import Swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false,
});



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
  }

  show(): void {


    this.userGroupService.getUserGroups()


    .subscribe(roles => {
      this.roles = roles;
      console.log(JSON.stringify(this.roles));
     },

     error => {

      this.fault = error ; // error path
      console.log(JSON.stringify(this.fault));

     }

     );


  }


  delete(role: UserGroup): void {

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Do you really want to permanently delete this record!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {

      if (result.value) {

        this.roles = this.roles.filter(h => h !== role);
        this.userGroupService.deleteUserGroup(role).subscribe();

        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Record deleted successfully.',
          'success'
        );
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Operation canceled. Record is still intact',
          'error'
        )
      }
    });

  }




}
