import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {authGuard} from "./_guards/auth.guard";
import {AdminComponent} from "./pages/admin/admin.component";
import {adminGuard} from "./_guards/admin.guard";

export const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent, canActivate: [authGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [authGuard, adminGuard]},
  {path: '**', redirectTo: ''}
];
