import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RepohomeComponent } from './repohome/repohome.component';
import { LandingComponent } from './landing/landing.component'
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'repohome', component: RepohomeComponent},
  { path: '**', component: NotFoundComponent},
  { path: '', redirectTo:"/landing", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
