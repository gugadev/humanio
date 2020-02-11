import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('people')
export class Person {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ name: 'first_name' })
  firstName: string
  @Column({ name: 'last_name' })
  lastName: string
  @Column()
  dni: string
  @Column()
  address: string
  @Column()
  phone: string
  @Column()
  email: string
}