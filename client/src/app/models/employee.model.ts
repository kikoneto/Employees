import { Identity } from "./identity.model";

export class Employee {
    identity: Identity;
    jobDescription: string;
    hireDate: string;
    email: string;

    constructor(firstName: string, secondName: string, age: number, jobDescription: string, hireDate: string, email: string) {
        this.identity = new Identity(firstName, secondName, age);
        this.jobDescription = jobDescription;
        this.hireDate = hireDate;
        this.email = email;
    }
}