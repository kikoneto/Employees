export class Employee {
    id?: number;
    firstName: string;
    secondName: string;
    age: number;
    city: string;
    email: string;
    company: string;
    date: string;
    department: string;

    constructor(firstName: string, secondName: string, age: number, city: string, email: string, company: string, date: string, department: string, id?: number) {
        if (id) {
            this.id = id;
        }
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.city = city;
        this.email = email;
        this.company = company;
        this.date = date;
        this.department = department;
    }
}