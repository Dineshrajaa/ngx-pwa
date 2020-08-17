import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public usersList: any;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.fetchUsersList();
  }

  public fetchUsersList() {
    this.userService.getUsersList()
      .subscribe((response: any) => {
        this.usersList = response;
      });
  }
}
