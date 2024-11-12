import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Prisma } from '@prisma/client';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() payload: Prisma.EmployeeCreateInput) {
    console.log("payload ->",payload)
    return this.employeesService.create(payload);
  }

  @Get()
  findAll(@Query('role') role?: "INTERN"| "ENGINEER" | "ADMIN") {
    return this.employeesService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload: Prisma.EmployeeUpdateInput) {
    return this.employeesService.update(+id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
