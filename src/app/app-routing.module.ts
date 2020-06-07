import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { MovieSliderComponent } from './movie-slider/movie-slider.component';
import { MoviesAdminComponent } from './movies-admin/movies-admin.component';
import { TheatresAdminComponent } from './theatres-admin/theatres-admin.component';
import { ScreenAdminComponent } from './screen-admin/screen-admin.component';
import { ShowAdminComponent } from './show-admin/show-admin.component';
import { MovieDisplayDetailsComponent } from './movie-display-details/movie-display-details.component';
import { PaymentComponent } from './payment/payment.component';

import { RoleGuardService } from './role-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuardService] },
  { path: 'seats', component: SeatBookingComponent },
  { path: 'movie-slider', component: MovieSliderComponent },
  { path: 'add-movie', component: MoviesAdminComponent },
  { path: 'add-theatre', component: TheatresAdminComponent },
  { path: 'add-screen', component: ScreenAdminComponent },
  { path: 'add-show', component: ShowAdminComponent },
  { path: 'movie-dets', component: MovieDisplayDetailsComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
