import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  /**
   * Method to fetch users list
   */
  public getUsersList() {
    const userListAPI = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(userListAPI,
      { observe: 'body' });
  }
}
