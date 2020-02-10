import { join } from 'path'
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SkillModule } from './skill/skill.module';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { Skill } from './skill/skill.model';
import { Connection } from 'typeorm'
import { Client } from './client/client.model';

console.log(join(process.cwd(), 'data.db'))

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
      entities: [Skill, Client],
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
