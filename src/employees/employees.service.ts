import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class EmployeesService {

  constructor(private readonly prismaService:DatabaseService){}
   create(payload: Prisma.EmployeeCreateInput) {
    const employee =  this.prismaService.employee.create({
      data:payload
    })
    return employee;
  }

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    const employee = this.prismaService.employee.findMany({
      where: role ? { role } : {},  
    });
    return employee;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, payload: Prisma.EmployeeUpdateInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
