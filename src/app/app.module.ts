import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule} from './routing/routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepohomeComponent } from './repohome/repohome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { GitService } from './git-service/git.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepohomeComponent,
    NavbarComponent,
    LandingComponent,
    HomeFormComponent,
    NotFoundComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
