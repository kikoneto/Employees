import { Body, Controller, Get, Param, Post, Delete, Put, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employees } from './employees.entity';


@Controller('employees')
export class EmployeesController {
    constructor(private service: EmployeesService) { }



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


    // Found by ID
    @Get('/:id')
    async findOne(@Param('id') id: number): Promise<Employees> {
        const employee = await this.service.findOne(id);
        return employee;
    }

    @Get()
    async findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 5,
        @Query('city') city?: string,
        @Query('department') department?: string,
    ) {
        const [employees, count] = await this.service.paginate(
            page,
            limit,
            city,
            department,
        );

        return {
            data: employees,
            count,
            page,
            limit,
        };
    }

    @Post()
    async createEmployee(@Body() employee: Employees): Promise<Employees> {
        const createdEmployee = await this.service.create(employee);
        return createdEmployee;
    }

    @Delete('/:id')
    async deleteEmployee(@Param('id') id: number): Promise<Employees[]> {
        const deletedEmployee = await this.service.remove(id);
        const employees = (await this.service.findAll()).reverse();
        return employees;
    }

    @Put('/:id')
    async updateEmployee(
        @Param('id') id: number,
        @Body() employeeData: Employees) {
        const updatedEmployee = await this.service.update(id, employeeData);
        return updatedEmployee;
    }

}
