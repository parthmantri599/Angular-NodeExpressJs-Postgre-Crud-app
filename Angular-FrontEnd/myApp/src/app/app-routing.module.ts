import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from 'src/app/appComponents/register/register.component';
import { LoginComponent } from 'src/app/appComponents/login/login.component';
import { HomeComponent } from 'src/app/appComponents/home/home.component';
import { ProfileComponent } from 'src/app/appComponents/profile/profile.component';
import { BoardUserComponent } from 'src/app/appComponents/board-user/board-user.component';
import { BoardAdminComponent } from 'src/app/appComponents/board-admin/board-admin.component';
import { UpdateUserComponent } from './appComponents/update-user/update-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'update', component: UpdateUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
