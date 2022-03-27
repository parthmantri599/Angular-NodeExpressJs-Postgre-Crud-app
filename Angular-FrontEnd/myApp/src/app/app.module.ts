import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/appComponents/login/login.component';
import { RegisterComponent } from 'src/app/appComponents/register/register.component';
import { HomeComponent } from 'src/app/appComponents/home/home.component';
import { ProfileComponent } from 'src/app/appComponents/profile/profile.component';
import { BoardAdminComponent } from 'src/app/appComponents/board-admin/board-admin.component';
import { BoardUserComponent } from 'src/app/appComponents/board-user/board-user.component';

import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';
import { UpdateUserComponent } from './appComponents/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
