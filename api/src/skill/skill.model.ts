import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('skills')
export class Skill implements Skill {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string
}