import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../modules/user/user';
import { UserGroup } from '../modules/user-groups/user-group';
import { AppSettings } from '../app-settings';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = AppSettings.API_ENDPOINT + '/users';

  constructor(private http: HttpClient) { }

  // Get users from backend server
  getUsers (): Observable<User[]> { return this.http.get<User[]>(this._url); }




}
