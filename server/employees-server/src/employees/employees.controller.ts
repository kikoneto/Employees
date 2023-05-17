import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employees } from './employees.entity';


@Controller('employees')
export class EmployeesController {
    constructor(private service: EmployeesService) { }

    @Get()
    async findAll(): Promise<Employees[]> {
        const employees = await this.service.findAll();

        return employees;
    }

    @Get('/:id')
    async findOne(@Param('id') id: number): Promise<Employees> {
        const employee = await this.service.findOne(id);

        return employee;
    }

    @Post()
    async createEmployee(@Body() employee: Employees): Promise<Employees> {
        const createdEmployee = await this.service.create(employee);
        return createdEmployee;
    }

    @Delete('/:id')
    async deleteEmployee(@Param('id') id: number): Promise<void> {
        const deletedEmployee = await this.service.remove(id);
    }

    @Put('/:id')
    async updateEmployee(
        @Param('id') id: number,
        @Body() employeeData: Employees) {
        const updatedEmployee = await this.service.update(id, employeeData);
        return updatedEmployee;
    }

}
