import { Entity, PrimaryGeneratedColumn, OneToOne, Column, JoinColumn, ManyToOne } from 'typeorm'
import { Person } from 'src/employee/person.model'
import { Client } from 'src/client/client.model'

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ name: 'contract_type' })
  contractType: string
  @Column()
  title: string
  @Column({ name: 'study_center' })
  studyCenter: string
  @Column()
  degree: string
  @Column()
  studying: number
  @Column()
  photo: string
  @OneToOne(() => Person)
  @JoinColumn({ name: 'person_id' })
  person: Person
  @ManyToOne(() => Client, client => client.name)
  @JoinColumn({ name: 'client_id' })
  client: Client
}