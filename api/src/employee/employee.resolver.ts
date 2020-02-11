import { Resolver, Query } from "@nestjs/graphql";
import { EmployeeService } from './employee.service'
import { Employee } from "./employee.model";

@Resolver('Employee')
export class EmployeeResolver {
  constructor(private readonly service: EmployeeService) {}

  @Query('employees')
  async getAll(): Promise<Employee[]> {
    return this.service.getAll()
  }
}