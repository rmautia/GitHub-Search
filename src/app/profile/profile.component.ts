import { Component, OnInit, Input, EventEmitter } from '@angular/core';


import { Github } from '../github-class/github';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() github: Github;

  constructor() { }

  ngOnInit(): void {
  }

}
