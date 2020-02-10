import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { SkillResolver } from "./skill.resolver"
import { SkillService } from "./skill.service"
import { Skill } from "./skill.model"

@Module({
  imports: [
    TypeOrmModule.forFeature([Skill]),
  ],
  providers: [
    SkillService,
    SkillResolver
  ],
  exports: [
    // TypeOrmModule,
    SkillService
  ]
})
export class SkillModule {
  
}