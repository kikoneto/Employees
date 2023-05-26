import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employees } from './employees.entity';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employees)
        private employeesRepository: Repository<Employees>
    ) { }



    findAll(): Promise<Employees[]> {
        return this.employeesRepository.find({
            select: ['id', 'firstName', 'secondName', 'age', 'city', 'email', 'company', 'date', 'department'],
        });
    }

    findAllCities(): Promise<string[]> {
        const cities = this.employeesRepository.query(
            'SELECT DISTINCT city FROM Employees'
        );
        return cities;
    }

    findAllDepartments(): Promise<string[]> {
        const departments = this.employeesRepository.query(
            'SELECT DISTINCT department FROM Employees'
        );
        return departments;
    }

    findOne(id: number): Promise<Employees | null> {
        return this.employeesRepository.findOneBy({ id });
    }

    async paginate(
        page = 1,
        limit = 5,
        city?: string,
        department?: string,
    ): Promise<[Employees[], number]> {
        const skip = (page - 1) * limit;
        const queryBuilder = this.employeesRepository.createQueryBuilder('employee');

        if (city) {
            queryBuilder.andWhere('employee.city = :city', { city });
        }

        if (department) {
            queryBuilder.andWhere('employee.department = :department', { department });
        }

        const employees = await queryBuilder
            .orderBy('employee.id', 'DESC')
            .skip(skip)
            .take(limit)
            .getMany();

        const count = await queryBuilder.getCount();

        return [employees, count];
    }

    async remove(id: number): Promise<void> {
        await this.employeesRepository.delete(id);
    }

    async create(employeeData: Employees): Promise<Employees> {
        const createdEmployee = await this.employeesRepository.save(employeeData);
        return createdEmployee;
    }

    async update(id: number, employeeData: Employees): Promise<Employees> {
        const existingEmployee = await this.findOne(id);

        if (!existingEmployee) {
            // Employee with the provided id doesn't exist, handle the error accordingly
            throw new NotFoundException('Employee not found');
        }

        // Update the properties of the existing employee
        existingEmployee.firstName = employeeData.firstName;
        existingEmployee.secondName = employeeData.secondName;
        existingEmployee.age = employeeData.age;
        existingEmployee.city = employeeData.city;
        existingEmployee.email = employeeData.email;
        existingEmployee.company = employeeData.company;
        existingEmployee.date = employeeData.date;

        const updatedEmployee = await this.employeesRepository.save(existingEmployee);
        return updatedEmployee;
    }
}