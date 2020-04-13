import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { from } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GitService {

  private userName: string;
  // private clientId: string = '<Client Id>';
  // private clientSecret: string = '<Client Secret Key>';
  private clientId: string = '922c8f6ccfa1661f8838da56c0a3d7208480ce60';
  private clientSecret: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

  constructor(private _http: HttpClient) { 
    //console.log('Github Service Ready.');
    this.userName = '';

  }
  getUser() {
    if (this.userName) {
        return this._http.get('http://api.github.com/users/' + this.userName
            + '?client_id=' + this.clientId
            + '&client_secret=' + this.clientSecret);
            
            
      }
  }
    getRepo() {
       if (this.userName) {
          return this._http.get('http://api.github.com/users/' + this.userName
               + '/repos?client_id=' + this.clientId
               + '&client_secret=' + this.clientSecret);
          }
      
    }
    updateUser(userName: string) {
      this.userName = userName;
    }
    private handleError(error: any) {

      if (error.status === 401) {
          return Observable.throw(error.status);
      } else {
          return Observable.throw(error.status || 'Server error');
      }
  }
}
  

