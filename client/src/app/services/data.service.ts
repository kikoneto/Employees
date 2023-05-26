import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Employee } from '../models/employee.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) { }

    private citySubject = new BehaviorSubject<string>('');
    private departmentSubject = new BehaviorSubject<string>('');

    // Get Employees based on params
    getEmployees(page?: number, limit?: number, city?: string, department?: string): Observable<any> {
        if (page && limit && city && department) {
            return this.http.get(`http://localhost:3000/employees?page=${page}&limit=${limit}&city=${city}&department=${department}`);
        } else if (page && limit && city) {
            return this.http.get(`http://localhost:3000/employees?page=${page}&limit=${limit}&city=${city}`);
        } else if (page && limit && department) {
            return this.http.get(`http://localhost:3000/employees?page=${page}&limit=${limit}&department=${department}`);
        } else if (page && city && department) {
            return this.http.get(`http://localhost:3000/employees?page=${page}&city=${city}&department=${department}`);
        } else if (city && department) {
            return this.http.get(`http://localhost:3000/employees?city=${city}&department=${department}`);
        } else if (page && city) {
            return this.http.get(`http://localhost:3000/employees?page=${page}&city=${city}`);
        } else if (page && department) {
            return this.http.get(`http://localhost:3000/employees?page=${page}&department=${department}`);
        } else if (city) {
            return this.http.get(`http://localhost:3000/employees?city=${city}`);
        } else if (department) {
            return this.http.get(`http://localhost:3000/employees?department=${department}`);
        } else if (page && limit) {
            return this.http.get(`http://localhost:3000/employees?page=${page}&limit=${limit}`);
        } else if (page) {
            return this.http.get(`http://localhost:3000/employees/?page=${page}`);
        } else {
            return this.http.get(`http://localhost:3000/employees`);
        }
    }

    // Manage Current City
    setCity(city: string) {
        this.citySubject.next(city);
    }

    getCity() {
        return this.citySubject.asObservable();
    }

    // Manage Current Department
    setDepartment(department: string) {
        this.departmentSubject.next(department);
    }

    getDepartment() {
        return this.departmentSubject.asObservable();
    }

    // Manage Employees
    addEmployee(employee: Employee): Observable<any> {
        return this.http.post('http://localhost:3000/employees', employee);
    }

    removeEmployee(id: number): Observable<any> {
        return this.http.delete(`http://localhost:3000/employees/${id}`).pipe()
    }

    // Get All Cities
    getCities(): Observable<any> {
        return this.http.get('http://localhost:3000/employees/city');
    }

    // Get All Departments
    getDepartments(): Observable<any> {
        return this.http.get('http://localhost:3000/employees/departments');
    }
}
