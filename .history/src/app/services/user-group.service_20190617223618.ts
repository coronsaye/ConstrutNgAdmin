import { Injectable } from '@angular/core';
import { UserGroup } from '../modules/user-groups/user-group';
import { AppSettings } from '../app-settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

  private _url = AppSettings.API_ENDPOINT + '/roles';

  constructor(private http: HttpClient) { alert(this._url); }

   // Get user groups from backend server
   getUserGroups (): Observable<UserGroup[]> { return this.http.get<UserGroup[]>(this._url); }
}
