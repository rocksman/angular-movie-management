import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { MoviesAdminComponent } from './movies-admin/movies-admin.component';
import { NewTheatreComponent } from './new-theatre/new-theatre.component';
import { TheatresAdminComponent } from './theatres-admin/theatres-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    NewMovieComponent,
    MoviesAdminComponent,
    NewTheatreComponent,
    TheatresAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
