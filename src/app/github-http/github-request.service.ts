import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Github } from '../github-class/github'
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  github: Github;

  constructor(private http:HttpClient) { 
    this.github = new Github("","","");
  }

  githubRequest(){
    interface ApiResponse {
      user: any;
      repo: any;
      userName: string;
    }
    let promise = new Promise ((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
      this. github.user = response.user
      this.github.repo = response.repo
      this.github.userName = response.userName


      resolve()
    },
    error=>{
      this.github.user = "user name example rmautia"
      this.github.repo = "rmautia/pollapp"
      this.github.userName = "sample username"

      reject(error)
    })
  })
  return promise
  }
}
