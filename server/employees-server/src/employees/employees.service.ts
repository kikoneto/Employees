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

    findWithPage(page: number, pageSize: number): Promise<Employees[]> {
        const offset = (page - 1) * pageSize;
        return this.employeesRepository.find({
            skip: offset,
            take: pageSize,
        });
    }

    findOne(id: number): Promise<Employees | null> {
        return this.employeesRepository.findOneBy({ id });
    }

    findByDepartment(department: string): Promise<Employees[]> {
        if (department === 'IT') {
            return this.employeesRepository.find({
                where: {
                    department: "IT"
                }
            });
        } else if (department === 'HR') {
            return this.employeesRepository.find({
                where: {
                    department: "HR"
                }
            });
        } else if (department === 'Marketing') {
            return this.employeesRepository.find({
                where: {
                    department: "Marketing"
                }
            });
        } else {
            throw new Error('No such department');
        }
    }

    findByCity(city: string): Promise<Employees[]> {
        return this.employeesRepository.find({
            where: {
                city: city
            }
        })
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