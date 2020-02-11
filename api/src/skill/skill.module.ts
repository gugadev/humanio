import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { SkillResolver } from "src/skill/skill.resolver"
import { SkillService } from "src/skill/skill.service"
import { Skill } from "src/skill/skill.model"

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