import { join } from 'path'
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { SkillModule } from 'src/skill/skill.module'
import { ClientModule } from 'src/client/client.module'
import { EmployeeModule } from 'src/employee/employee.module'
import { Skill } from 'src/skill/skill.model'
import { Client } from 'src/client/client.model'
import { Person } from 'src/employee/person.model'
import { Employee } from 'src/employee/employee.model'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      }
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(process.cwd(), 'data.db'),
      entities: [Skill, Client, Person, Employee],
      logging: true,
      synchronize: false
    }),
    // app modules
    ClientModule,
    SkillModule,
    EmployeeModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    console.log(this.connection.isConnected)
  }
}
