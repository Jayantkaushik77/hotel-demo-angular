import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ChapterComponent } from './chapter/chapter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RamaComponent } from './rama/rama.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { ErrorComponent } from './error/error.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ChapterComponent,
    RoomsListComponent,
    RamaComponent,
    AppNavComponent,
    RoomsBookingComponent,
    ErrorComponent,
    UserLoginComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
