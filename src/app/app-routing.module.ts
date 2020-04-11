import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RepohomeComponent } from './repohome/repohome.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'repohome', component: RepohomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
