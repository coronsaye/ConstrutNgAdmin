import { Injectable } from '@angular/core';
import { UserGroup } from '../models/user-group';
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
  addUserGroup (data: UserGroup): Observable<UserGroup>  {

    return this.http.post<UserGroup>(this._baseUrl + '/roles', data , httpOptions).pipe(
      tap((newRole: UserGroup) => console.log(`added hero w/ id=${newRole.id}`)),
      catchError(AppSettings.handleError));
  }

  /** DELETE: delete the hero from the server */
  deleteUserGroup (role: UserGroup | number): Observable<UserGroup> {
    const id = typeof role === 'number' ? role : role.id;
    const url = `${this._baseUrl + '/roles'}/${id}`;

    return this.http.delete<UserGroup>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted role id=${id}`)),
      catchError(AppSettings.handleError)
    );
  }
}
