import { Body, Controller, Get, Param, Post, Delete, Put, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employees } from './employees.entity';


@Controller('employees')
export class EmployeesController {
    constructor(private service: EmployeesService) { }

    // Found by department
    @Get('/departments/:department')
    async findByDepartment(@Param('department') department: string): Promise<Employees[]> {
        console.log('departments/departments')
        return await this.service.findByDepartment(department);
    }

    // Found by City
    @Get('/city/:city')
    async findByCity(@Param('city') city: string): Promise<Employees[]> {
        console.log('city/city')
        return await this.service.findByCity(city);
    }

    // Get All Departments
    @Get('/departments')
    async findByDepartments(): Promise<string[]> {
        console.log('departments')
        const department = await this.service.findAllDepartments();
        return department;
    }

    // Get All Cities
    @Get('/city')
    async findAllCities(): Promise<string[]> {
        console.log('city')
        const cities = await this.service.findAllCities();
        return cities;
    }

    // Paged Employees
    @Get('/find')
    async findWithPagination(@Query('page') page: number, @Query('pageSize') pageSize: number) {
        return await this.service.findWithPage(page, pageSize);
    }

    // Found by ID
    @Get('/:id')
    async findOne(@Param('id') id: number): Promise<Employees> {
        const employee = await this.service.findOne(id);
        return employee;
    }

    // All Employees
    @Get()
    async findAll(): Promise<Employees[]> {
        const employees = await this.service.findAll();
        return employees;
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
