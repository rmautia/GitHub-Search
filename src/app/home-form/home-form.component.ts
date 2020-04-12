import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { GithubRequestService } from '../github-http/github-request.service'
import 'rxjs/add/operator/map';

import { Github } from '../github-class/github';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  
  @Input() github: Github;
  @Output() userUpdated: EventEmitter<Github> =  new EventEmitter<Github>();


  constructor(private _gitService: GitService) { }

  ngOnInit() {

    if (this.github) {
      this.github.user = false;
      this.getUserInformation();
    }
  }

  getUserInformation() {
    if (this.github.userName && this.github.userName.length > 0) {

      this._gitService.getUser().subscribe(user => {
        this.github.user = user;
        this.userUpdated.emit(this.github)
      },
        (error) => {
          console.log('error:' + error);
          this.github.user = false
        },
        () => console.log('Done')
      
      );


      this._gitService.getRepo().subscribe(repo => {
        //console.log(repo);
        this.github.repo = repo
        this.userUpdated.emit(this.github);
       },
        (error) => {
          console.log('error:' + error);
          this.github.user = false;
        },
        () => console.log('Done')
     );
    }
  }

}
