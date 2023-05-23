// Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { httpInterceptorProviders } from './https-interceptors';


// Components
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { EmployeesInfoComponent } from './components/employees/employees-info/employees-info.component';
import { EmployeesFormComponent } from './components/employees/employees-form/employees-form.component';
import { ConfirmModal } from './components/confirm-modal/confirm-modal.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RegisterComponent } from './components/auth/register/register.component';

// Services
import { EmployeeService } from './services/data.service';
import { AuthService } from './services/auth.service';

// State Managers
import { cityReducer, departmentReducer, employeeReducer, paginateReducer } from './state/employees.reducer';
import { EmployeeEffects } from './state/employees.effect';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesListComponent,
    EmployeesInfoComponent,
    EmployeesFormComponent,
    ConfirmModal,
    LoginComponent,
    HeaderComponent,
    FilterComponent,
    PaginatorComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({ employee: employeeReducer, city: cityReducer, department: departmentReducer, pagination: paginateReducer }),
    EffectsModule.forRoot([EmployeeEffects])
  ],
  providers: [AuthService, EmployeeService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
