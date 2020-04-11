import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Github } from '../github-class/github';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  github:Github;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{

    }
  }

}
