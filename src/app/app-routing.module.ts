import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ChapterComponent } from './chapter/chapter.component';
import { RamaComponent } from './rama/rama.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { ErrorComponent } from './error/error.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'chapter', component: ChapterComponent },
  { path: 'rama', component: RamaComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'room/:id', component: RoomsBookingComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'test',
    component: TestComponent,
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
