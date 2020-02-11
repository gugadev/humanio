import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Person } from 'src/employee/person.model'
import { Employee } from 'src/employee/employee.model'
import { EmployeeResolver } from 'src/employee/employee.resolver'
import { EmployeeService } from 'src/employee/employee.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Person, Employee]),
  ],
  providers: [
    EmployeeResolver,
    EmployeeService
  ],
  exports: [
    EmployeeService
  ]
})
export class EmployeeModule {

}