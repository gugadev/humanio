import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Employee } from 'src/employee/employee.model'

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string
  @OneToMany(() => Employee, emp => emp.client)
  employees: Employee[]
}