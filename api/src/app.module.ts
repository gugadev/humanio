import { join } from 'path'
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      }
    }),
    // app modules
    SkillModule
  ]
})
export class AppModule {}
