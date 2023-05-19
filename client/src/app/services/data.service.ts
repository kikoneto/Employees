import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

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

}
