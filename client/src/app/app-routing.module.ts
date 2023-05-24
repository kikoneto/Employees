import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesFormComponent } from './components/employees/employees-form/employees-form.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './services/authGuard.service';
import { EmployeesInfoComponent } from './components/employees/employees-info/employees-info.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  { path: '', component: EmployeesInfoComponent },
  { path: 'list', component: EmployeesListComponent, canActivate: [AuthGuard] },
  { path: 'add-employee', component: EmployeesFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }