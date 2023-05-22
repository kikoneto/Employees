import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Employee } from '../models/employee.model';
import { Observable, tap } from 'rxjs';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) { }

    getEmployees(): Observable<any> {
        return this.http.get('http://localhost:3000/employees');
    }

    addEmployee(employee: Employee): Observable<any> {
        return this.http.post('http://localhost:3000/employees', employee);
    }

    removeEmployee(id: number): Observable<any> {
        return this.http.delete(`http://localhost:3000/employees/${id}`)
    }

    getCities(): Observable<any> {
        return this.http.get('http://localhost:3000/employees/city');
    }

    getDepartments(): Observable<any> {
        return this.http.get('http://localhost:3000/employees/departments');
    }

    getByDepartments(department: string): Observable<any> {
        return this.http.get(`http://localhost:3000/employees/departments/${department}`);
    }

    getByCity(city: string): Observable<any> {
        return this.http.get(`http://localhost:3000/employees/city/${city}`);
    }

    getByPage(page: number, pageSize: number): Observable<any> {
        return this.http.get(`http://localhost:3000/employees/find?page=${page}&pageSize=${pageSize}`)
    }
}
