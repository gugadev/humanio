import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Employee } from 'src/employee/employee.model'

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly repository: Repository<Employee>
  ) {}

  async getAll(): Promise<Employee[]> {
    return this.repository.find()
  }
}