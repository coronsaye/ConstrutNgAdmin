import { Injectable } from '@angular/core';
import { UserGroup } from '../modules/user-groups/user-group';
import { AppSettings } from '../app-settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'ttp://localhost:3031',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,POST',
    'Access-Control-Allow-Headers': 'X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Pragma'
  })

};

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  private _baseUrl = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) { }

   // Get user groups from backend server
   getUserGroups (): Observable<UserGroup[]> {

     return this.http.get<UserGroup[]>(this._baseUrl + '/roles').pipe( retry(3),catchError(AppSettings.handleError));
    }

  // Add new user group
  addUserGroup (data: UserGroup) {

    return this.http.post(this._baseUrl + '/role', data );
  }
}
