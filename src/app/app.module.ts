import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { NewScreenComponent } from './new-screen/new-screen.component';
import { ScreenAdminComponent } from './screen-admin/screen-admin.component';
import { NewShowComponent } from './new-show/new-show.component';
import { ShowAdminComponent } from './show-admin/show-admin.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { MovieSliderComponent } from './movie-slider/movie-slider.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { UpdateTheatreComponent } from './update-theatre/update-theatre.component';
import { UpdateScreenComponent } from './update-screen/update-screen.component';
import { UpdateShowComponent } from './update-show/update-show.component';
import { MovieDisplayDetailsComponent } from './movie-display-details/movie-display-details.component';
import { PaymentComponent } from './payment/payment.component';

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
    TheatresAdminComponent,
    NewScreenComponent,
    ScreenAdminComponent,
    NewShowComponent,
    ShowAdminComponent,
    SeatBookingComponent,
    MovieSliderComponent,
    UpdateMovieComponent,
    UpdateTheatreComponent,
    UpdateScreenComponent,
    UpdateShowComponent,
    MovieDisplayDetailsComponent,
    PaymentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
