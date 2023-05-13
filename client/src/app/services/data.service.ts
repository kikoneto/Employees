import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
    providedIn: 'root'
})

export class EmployeeDataService {
    init = new Employee(
        '',
        '',
        NaN,
        '',
        '',
        '',
    );

    employeesCollection: Employee[] = [
        new Employee(
            'Ivan',
            'Georgiev',
            35,
            'QA',
            '25.01.2019',
            'ivanGeorgiev@gmail.com',
        ),
        new Employee(
            'Rosen',
            'Jivkov',
            23,
            'Web Developer',
            '21.02.2021',
            'rosenJivkov@gmail.com',
        )
    ]

    private data = new BehaviorSubject<Employee>(this.init);
    private collection = new BehaviorSubject(this.employeesCollection);

    private setCollection(collection: Employee[]) {
        this.collection.next(collection);
    }

    setData(employee: Employee) {
        this.data.next(employee);
        this.employeesCollection = this.employeesCollection.concat(employee);
        this.setCollection(this.employeesCollection);
        console.log(this.employeesCollection)
    }


    getData() {
        return this.data.asObservable()
    }

    getCollection() {
        return this.collection.asObservable();
    }

    delData(emp: string) {
        this.employeesCollection = this.employeesCollection.filter(x => x.email !== emp);
        this.setCollection(this.employeesCollection)
    }
}
