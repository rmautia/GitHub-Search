import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RepohomeComponent } from '../repohome/repohome.component';
import { LandingComponent } from '../landing/landing.component'
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'repohome', component: RepohomeComponent},
  { path: '', redirectTo:"/landing", pathMatch:"full"},
  { path: '**', component: NotFoundComponent},
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
